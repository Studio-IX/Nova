"use client";

import SearchInput from "@/components/search-input";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { MobileSidebar } from "@/components/mobile-sidebar";
import { useProModal } from "@/hooks/use-pro-modal";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const font = Poppins({ weight: "600", subsets: ["latin"] });
interface NavbarProps {
  isPro: boolean;
}

export const Navbar = ({ isPro }: NavbarProps) => {
  const proModal = useProModal();
  const pathname = usePathname();
  const hiddenPaths = ["/dashboard/companion/new", "/dashboard/settings"];
  return (
    <div className="fixed w-full z-10 flex justify-between items-center py-2 px-4 h-16 bg-dg">
      <div className="flex md:hidden items-center">
        <MobileSidebar isPro={isPro} />
      </div>
      {!hiddenPaths.includes(pathname) && (
        <div className="md:ml-[310px] hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex items-center gap-x-3">
        {/* <ModeToggle /> */}
        <div className="md:hidden">
          <Button
            className="rounded-lg"
            onClick={proModal.onOpen}
            size="lg"
            variant="premium"
          >
            Upgrade
            <Sparkles className="h-5 w-5 fill-white text-white ml-2" />
          </Button>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
