import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return <div className={cn("sbp:max-w-7xl max-w-5xl mx-auto sbp:px-10 sm:px-16 px-", className)}>{children}</div>;
}
