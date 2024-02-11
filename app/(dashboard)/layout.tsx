import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { checkSubscription } from "@/lib/subscription";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const isPro = await checkSubscription();

  return (
    <div className="h-full">
      <Navbar isPro={isPro} />
      <div className="hidden md:flex h-full w-[300px] flex-col fixed inset-y-0 z-50">
        <Sidebar isPro={isPro} />
      </div>
      <main className="md:pl-[310px] pt-16 h-screen bg-dg">{children}</main>
    </div>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: "Nova - Dashboard",
  description:
    "Chat with your personalized AI companion or create a new one from scratch",
};
