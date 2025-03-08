import { useState, useEffect } from "react";

const Theme = () => {
  const [isDark, setIsDark] = useState(
    () => JSON.parse(localStorage.getItem("isDark")) || false
  );

  // Effect to add/remove the "dark" class based on the state
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
      localStorage.setItem("isDark", newIsDark);
      return newIsDark;
    });
  };

  return (
    <button onClick={handleThemeToggle} className="flex items-center gap-4">
      <p> Enable {!isDark ? "Dark" : "Light"} Mode</p>
      <div
        className={`relative w-10 h-5 p-1 rounded-full transition-colors duration-300 ${
          isDark ? "bg-gray-700" : "bg-white"
        }`}
      >
        <div
          className={`absolute top-0 bottom-0 w-5 h-full rounded-full transform transition-transform duration-300 ${
            isDark
              ? "translate-x-full bg-gray-900"
              : "-translate-x-1 bg-gray-700"
          }`}
        ></div>
      </div>
    </button>
  );
};

export default Theme;
