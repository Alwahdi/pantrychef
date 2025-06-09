import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

        // ✅ Hover style similar to app
        "hover:border-[#cbd1c5]",

        // ✅ Focus-visible ring style
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",

        // ✅ Aria-invalid styling
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",

        // ✅ Smooth transition
        "transition-colors duration-150",

        className
      )}
      {...props}
    />
  );
}

export { Input };
