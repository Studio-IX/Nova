import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ProModal } from "@/components/pro-modal";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nova - Custom AI Friend",
  description:
    "Nova is your personalized AI companion for instant, 24/7 conversations. Craft your AI friend and chat anytime, anywhere.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#8343F3",
          colorBackground: "#161616",
          colorText: "white",
          colorInputBackground: "#212121",
          colorInputText: "white",
          fontSize: "18px",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-[#161616]", dmSans.className)}>
          {children}
          <ProModal />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
