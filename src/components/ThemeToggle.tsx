"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors flex items-center justify-center group shadow-sm"
      aria-label="Toggle Theme"
    >
      <Sun className="h-4 w-4 text-slate-800 dark:text-slate-200 block dark:hidden group-hover:scale-110 transition-transform" />
      <Moon className="h-4 w-4 text-slate-200 hidden dark:block group-hover:scale-110 transition-transform" />
    </button>
  );
}
