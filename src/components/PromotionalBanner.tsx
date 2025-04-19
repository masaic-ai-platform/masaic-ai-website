import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";

const PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = React.useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const checkDarkMode = () => {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeQuery.matches);
    };

    // Set up initial check and listener for changes
    checkDarkMode();
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', checkDarkMode);

    // Clean up listener
    return () => darkModeQuery.removeEventListener('change', checkDarkMode);
  }, []);

  useEffect(() => {
    if (bannerRef.current && isVisible) {
      setBannerHeight(bannerRef.current.offsetHeight);
      document.documentElement.style.setProperty('--banner-height', `${bannerRef.current.offsetHeight}px`);
    } else {
      setBannerHeight(0);
      document.documentElement.style.setProperty('--banner-height', '0px');
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      ref={bannerRef}
      className={cn(
        "fixed top-0 left-0 right-0 text-white py-2 z-40 shadow-md border-b transition-colors duration-300",
        isDarkMode 
          ? "bg-gradient-to-r from-indigo-950 via-indigo-900 to-purple-950 border-indigo-800" 
          : "bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 border-indigo-700"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-1.5 sm:px-4">
        <div className="flex items-center flex-grow min-w-0">
          <div className={cn(
            "text-[8px] leading-tight sm:text-xs font-semibold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border shadow-sm flex-shrink-0 mr-2 sm:mr-3",
            isDarkMode 
              ? "bg-amber-500 text-indigo-950 border-amber-400" 
              : "bg-gradient-to-r from-amber-400 to-amber-500 text-indigo-900 border-amber-300"
          )}>
            WORLD'S FIRST
          </div>
          <p className="font-medium tracking-tight text-sm sm:text-base truncate pr-1">
            <span className="hidden sm:inline mr-1">⚡</span>
            <span className="hidden sm:inline">
              Sovereign Codex with your own models & MCP tools is here
            </span>
            <span className="sm:hidden">
              Sovereign Codex is here
            </span>
          </p>
        </div>
        <div className="flex items-center flex-shrink-0 ml-1">
          <a 
            href="https://openresponses.masaic.ai/use-cases/codex-demo" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "text-xs sm:text-sm font-medium transition-all px-2 sm:px-4 py-1 sm:py-1.5 rounded flex items-center space-x-1",
              isDarkMode 
                ? "bg-indigo-200 text-indigo-950 hover:bg-white hover:shadow-md" 
                : "bg-white text-indigo-900 hover:bg-indigo-50 hover:shadow-md border border-indigo-100"
            )}
          >
            <span className="hidden sm:inline">Try It Now</span>
            <span className="sm:hidden">Try Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-3.5 sm:w-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "hover:text-white h-6 w-6 sm:h-8 sm:w-8 ml-1 sm:ml-2",
              isDarkMode 
                ? "text-indigo-200 hover:bg-indigo-900/40" 
                : "text-indigo-100 hover:bg-indigo-800/40"
            )}
            onClick={() => setIsVisible(false)}
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner; 