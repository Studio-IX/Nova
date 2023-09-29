import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <div className="h-[40px] w-[40px] bg-white flex items-center justify-center rounded-lg">
          <Image src="/mobile_menu.svg" height={15} width={22} alt="Menu" />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary w-[300px]">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
