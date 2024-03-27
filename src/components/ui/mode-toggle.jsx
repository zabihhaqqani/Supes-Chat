import { Moon, Sun } from "lucide-react";

import { Button } from "./button";
import { useTheme } from "../../context/themeContext";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="m-2 mr-4"
      >
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
