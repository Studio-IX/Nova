"use client";

import SearchInput from "@/components/search-input";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { useProModal } from "@/hooks/use-pro-modal";

const font = Poppins({ weight: "600", subsets: ["latin"] });
interface NavbarProps {
  isPro: boolean;
}

export const Navbar = () => {
  const proModal = useProModal();
  const pathname = usePathname();
  const hiddenPaths = ['/dashboard/companion/new', '/dashboard/settings'];
  return (
    <div className="fixed w-full z-10 flex justify-between items-center py-2 px-4 h-16 bg-dg">
      <div className="flex md:hidden items-center">
        <MobileSidebar />
      </div>
      {!hiddenPaths.includes(pathname) && (
        <div className="ml-[310px]">
          <SearchInput />
        </div>
      )}
      <div className="flex items-center gap-x-3">
        {/* <ModeToggle /> */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
