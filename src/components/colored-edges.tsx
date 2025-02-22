import { cn } from "@/lib/utils";
import React from "react";

export function ColoredEdgesBox({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "p-6 border-[1px] border-[#a3a3a4]/20 relative rounded-lg",
        className
      )}
    >
      <div className="h-[25px] group-hover:opacity-100 w-[25px] border-0 rounded-tl-lg border-t-[1px] border-l-[1px] border-[#7fb210] -top-[2px] -left-[2px] absolute"></div>
      <div className="h-[25px] group-hover:opacity-100 w-[25px] border-0 rounded-bl-lg border-b-[1px] border-l-[1px] border-[#7fb210] -bottom-[2px] -left-[2px] absolute"></div>
      <div className="h-[25px] group-hover:opacity-100 w-[25px] border-0 rounded-tr-lg border-t-[1px] border-r-[1px] border-[#7fb210] -top-[2px] -right-[2px] absolute"></div>
      <div className="h-[25px] group-hover:opacity-100 w-[25px] border-0 rounded-br-lg border-b-[1px] border-r-[1px] border-[#7fb210] -bottom-[2px] -right-[2px] absolute"></div>
      {children}
    </div>
  );
}
