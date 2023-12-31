import { Companion } from "@prisma/client";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { MessagesSquare } from "lucide-react";

interface CompanionProps {
  data: (Companion & {
    _count: {
      messages: number;
    };
  })[];
}

export const Companions = ({ data }: CompanionProps) => {
  if (data.length === 0) {
    return (
      <div className="pt-10 flex flex-col items-center justify-center space-y-3">
        <div className="relative w-[20rem] md:w-[28rem] h-[20rem] md:h-[28rem]">
          <Image fill className="grayscale" alt="Empty" src="/empty.png" />
        </div>
        <p className="text-base text-muted-foreground">No companions found</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pb-10 pt-10">
      {data.map((item) => (
        <Card
          key={item.id}
          className="bg-[#1D1D1D] rounded-xl cursor-pointer hover:opacity-75 transition border-0"
        >
          <Link href={`/chat/${item.id}`}>
            <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
              <div className="relative w-full h-[160px] lg:h-[250px] xl:h-[280px] 2xl:h-[300px]">
                <Image
                  src={item.src}
                  fill
                  className="rounded-xl object-cover"
                  alt="Companion"
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-[16px] md:text-[20px] font-dmSans text-white">
                {item.name}
              </p>
              <p className="text-[15px] md:text-[16px] font-dmSans font-light text-[#9B9CA1] min-h-[50px]">
                {item.description}
              </p>
            </CardContent>
            <CardFooter className="flex items-center justify-between text-[15px] md:text-[16px] text-[#9B9CA1] font-dmSans font-light">
              <p className="lowercase">@{item.userName}</p>
              <div className="flex items-center">
                <MessagesSquare className="w-4 h-4 mr-2" />
                {item._count.messages}
              </div>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
};
