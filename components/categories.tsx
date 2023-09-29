"use client";

import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
interface CategoriesProps {
  data: Category[];
}

export const Categories = ({ data }: CategoriesProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1 -mt-0 md:-mt-4">
      <button
        onClick={() => onClick(undefined)}
        className={cn(
          `
                    no_wrap_text
                    px-4
                    md:px-6
                    items-center
                    text-center
                    text-[15px]
                    md:text-[16px]
                    font-dmSans
                    font-normal
                    py-3
                    md:py-3
                    rounded-md
                    bg-[#1D1D1D]
                    text-[#818181]
                    hover:opacity-75
                    transition
                `,
          !categoryId ? "bg-primry text-white" : "bg-[#1D1D1D]"
        )}
      >
        Newest
      </button>
      {data.map((item) => (
        <button
          onClick={() => onClick(item.id)}
          key={item.id}
          className={cn(
            `           
                        px-4
                        md:px-6
                        no_wrap_text
                        items-center
                        text-[15px]
                        md:text-[16px]
                        font-dmSans
                        font-normal
                        py-3
                        md:py-3
                        rounded-md
                        bg-[#1D1D1D]
                        text-[#818181]
                        hover:opacity-75
                        transition
                    `,
            item.id === categoryId ? "bg-primry text-white" : "bg-[#1D1D1D]"
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
