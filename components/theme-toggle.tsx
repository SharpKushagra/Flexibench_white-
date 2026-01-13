"use client";

import * as React from "react";
import { Moon, Sun, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [newTheme, setNewTheme] = React.useState<string | null>(null);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setNewTheme(nextTheme);
    setTheme(nextTheme);
    setShowFeedback(true);
    // Hide after animation completes (600ms fade in + 2000ms visible + 500ms fade out)
    setTimeout(() => {
      setShowFeedback(false);
      setTimeout(() => {
        setNewTheme(null);
      }, 500); // Wait for fade out animation
    }, 3100);
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
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-accent"
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
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      {/* Feedback message at top center of viewport with smooth fade animation */}
      {showFeedback && mounted && typeof window !== "undefined" && newTheme && createPortal(
        <div className="fixed top-6 left-0 right-0 flex justify-center z-[9999] pointer-events-none">
          <div 
            className={cn(
              "flex items-center gap-2.5 bg-background/95 backdrop-blur-md border border-border/50 text-foreground text-sm px-5 py-3 rounded-xl shadow-2xl",
              "theme-toast-fade-in"
            )}
          >
            <div className={cn(
              "flex items-center justify-center w-6 h-6 rounded-full transition-all duration-500",
              newTheme === "dark" ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
            )}>
              <Check className="h-3.5 w-3.5" />
            </div>
            <span className="font-semibold">
              {newTheme === "dark" ? "Dark mode" : "Light mode"} enabled
            </span>
          </div>
        </div>,
        document.body
      )}
      
      <style jsx global>{`
        @keyframes themeToastFadeIn {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
            filter: blur(4px);
          }
          60% {
            opacity: 0.95;
            transform: translateY(2px) scale(1.02);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        
        @keyframes themeToastFadeOut {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-15px) scale(0.95);
            filter: blur(2px);
          }
        }
        
        .theme-toast-fade-in {
          animation: themeToastFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards,
                     themeToastFadeOut 0.5s cubic-bezier(0.4, 0, 0.2, 1) 2.5s forwards;
        }
      `}</style>
    </>
  );
}
