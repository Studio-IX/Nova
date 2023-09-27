"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useProModal } from "@/hooks/use-pro-modal";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export const ProModal = () => {
  const proModal = useProModal();
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast({
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-center">Get Premium</DialogTitle>
          <DialogDescription className="text-center">
            Unlock exclusive features <br />
            with our premium plan.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-2 items-start justify-center">
          <div className="flex flex-row items-center">
              <Image width={20} height={20} src="/check.svg" alt="Check"/>
              <p className="ml-3 font-dmSans font-normal text-[16px] text-white">Maximum 2 personalities</p>
          </div>
          <div className="flex flex-row items-center">
              <Image width={20} height={20} src="/check.svg" alt="Check"/>
              <p className="ml-3 font-dmSans font-normal text-[16px] text-white">Advanced Security & Encrypted Chats</p>
          </div>
          <div className="flex flex-row items-center">
              <Image width={20} height={20} src="/check.svg" alt="Check"/>
              <p className="ml-3 font-dmSans font-normal text-[16px] text-white">Advanced AI model</p>
          </div>
          <div className="flex flex-row items-center">
              <Image width={20} height={20} src="/check.svg" alt="Check"/>
              <p className="ml-3 font-dmSans font-normal text-[16px] text-white">Email support</p>
          </div>
          <div className="flex flex-row items-center">
              <Image width={20} height={20} src="/check.svg" alt="Check"/>
              <p className="ml-3 font-dmSans font-normal text-[16px] text-white">Premium support</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            className="w-[300px]"
            onClick={onSubscribe}
            disabled={loading}
            size="xl"
            variant="premium"
          >
            Upgrade Now
            <Sparkles className="h-5 w-5 fill-white text-white ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
