import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="h-full p-4 md:-mt-16 md:z-[11] relative">
      <h3 className="text-2xl font-medium text-white">Settings</h3>
      <div className="text-muted-foreground text-base mt-1">
        {isPro
          ? "You are currently on a Pro plan."
          : "You are currently on a free plan."}
      </div>
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default SettingsPage;
