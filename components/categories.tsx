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
    <div className="w-full overflow-x-auto space-x-2 flex p-1 md:-mt-4">
      <button
        onClick={() => onClick(undefined)}
        className={cn(
          `
                    flex
                    items-center
                    text-center
                    text-xs
                    md:text-[16px]
                    font-dmSans
                    font-normal
                    px-2
                    md:px-4
                    py-2
                    md:py-3
                    rounded-md
                    bg-[#1D1D1D]
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
                        flex
                        items-center
                        text-center
                        text-xs
                        md:text-[16px]
                        font-dmSans
                        font-normal
                        px-2
                        md:px-4
                        py-2
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
