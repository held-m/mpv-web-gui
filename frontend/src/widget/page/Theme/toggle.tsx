"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [iconTheme, setIconTheme] = useState("");

  useEffect(() => {
    if (theme == "light") {
      setIconTheme("🌞");
    } else {
      setIconTheme("🌙");
    }
  }, [theme]);

  function themaOnClickHandler(e: React.ChangeEvent<HTMLElement>) {
    if (theme == "light") {
      setTheme("dark");
      setIconTheme("🌙");
    } else {
      setTheme("light");
      setIconTheme("🌞");
    }
  }

  return (
    <label className="inline-flex relative items-center m-4 cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={themaOnClickHandler}
        checked={theme == "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[ dark:peer-focus:ring-blue-800''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {iconTheme}
      </span>
    </label>
  );
};
