import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useDarkMode(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      setDark(saved === "dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
  }, [dark]);

  return [dark, setDark];
}
