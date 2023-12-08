"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const SubscriptionButton = ({ isPro = false }: { isPro: boolean }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);

      //const response = await axios.get("/api/stripe");

      //window.location.href = response.data.url;

      window.location.href =
        "https://buy.stripe.com/9AQ7vafvL4j2b2E144";
    } catch (error) {
      toast({
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
    className="mt-4"
      size="sm"
      variant={isPro ? "default" : "premium"}
      disabled={loading}
      onClick={onClick}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Sparkles className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
