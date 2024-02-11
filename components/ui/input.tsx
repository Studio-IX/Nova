import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-[#363534] bg-[#1F1F1F] px-3 py-2 text-[16px] font-dmSans font-normal ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium text-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
