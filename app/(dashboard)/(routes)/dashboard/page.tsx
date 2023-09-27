import { Categories } from "@/components/categories";
import { Companions } from "@/components/companions";
import prismadb from "@/lib/prismadb";
import { UserButton } from "@clerk/nextjs";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const RootPage = async ({ searchParams }: RootPageProps) => {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });
  const categories = await prismadb.category.findMany();
  return (
    <div className="h-full p-4">
      <Categories data={categories} />
      <Companions data={data} />
    </div>
  );
};

export default RootPage;