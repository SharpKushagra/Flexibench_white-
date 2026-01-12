"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [showFeedback, setShowFeedback] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 hover:bg-accent relative"
            onClick={handleToggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className={cn(
                "h-5 w-5 transition-all duration-300",
                showFeedback && "rotate-180 scale-110"
              )} />
            ) : (
              <Moon className={cn(
                "h-5 w-5 transition-all duration-300",
                showFeedback && "rotate-180 scale-110"
              )} />
            )}
            {showFeedback && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap animate-fade-in-scale">
                {theme === "dark" ? "Light mode" : "Dark mode"} enabled
              </span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
