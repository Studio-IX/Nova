"use client";

import { Home, Plus, Settings, Sparkles } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { useProModal } from "@/hooks/use-pro-modal";
import { Button } from "@/components/ui/button";

import Image from "next/image";

interface NavbarProps {
  isPro: boolean;
}

export const Sidebar = () => {
  const proModal = useProModal();
  const router = useRouter();
  const pathname = usePathname();

  const onNavigate = (url: string, pro: boolean) => {
    // if (pro && !isPro) {
    //   return proModal.onOpen();
    // }

    return router.push(url);
  };

  const routes = [
    {
      icon: "/home.svg",
      href: "/dashboard",
      label: "Home",
      pro: false,
    },
    {
      icon: "/create.svg",
      href: "/dashboard/companion/new",
      label: "Create",
      pro: true,
    },
    {
      icon: "/settings.svg",
      href: "/dashboard/settings",
      label: "Settings",
      pro: false,
    },
  ];

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary bg-sg w-[300px]">
      <div className="pt-[60px] md:pt-[15px] pb-[200px]">
        <Image width={35} height={35} src="logo_dashboard.svg" alt="logo" />
      </div>
      <div className="p-3 flex-1 flex justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href, route.pro)}
              key={route.href}
              className={cn(
                "text-[#A2A2A5] text-[18px] group flex p-3 w-[250px] z-10 justify-start font-dmSans font-normal cursor-pointer hover:text-primary hover:bg-primary/10 rounded-xl transition",
                pathname === route.href &&
                  "bg-[#1F1F1F] border border-[#363534] text-white"
              )}
            >
              <div className="flex flex-row gap-x-4 items-center flex-1">
                <Image
                  src={route.icon}
                  width={20}
                  height={20}
                  alt="Menu icon"
                  className={pathname !== route.href ? "inactive-icon" : ""}
                />{" "}
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-col bg-[#1F1F1F] border border-[#363534] w-[250px] rounded-2xl items-center py-8">
          <p className="text-[18px] font-dmSans font-medium ">Get Premium</p>
          <p className="text-[16px] font-dmSans font-normal text-center mt-1 text-[#A2A2A5]">
            Unlock exclusive features
            <br /> with our premium plan.
          </p>

          <Button
            className="mt-4 rounded-lg"
            onClick={proModal.onOpen}
            size="xl"
            variant="premium"
          >
            Upgrade
            <Sparkles className="h-5 w-5 fill-white text-white ml-2" />
          </Button>
        </div>
      </div>

      <div className="pt-4" />
    </div>
  );
};
