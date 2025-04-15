import { createContext, useState } from "react";
import React from "react";
import { useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//creating a component that will consume the context

export const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 flex  flex-col justify-center items-center h-screen ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } `}
    >
      <h1
        className={`my-4 text-4xl ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        Dark Light Mode Website
      </h1>
      <p
        className={`my-4 text-3xl ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        Hello My React v19 Fans❤️😊❤️
      </p>
      <button
        onClick={handleToggleTheme}
        className="bg-blue-500 hover:bg-blue-600  text-white rounded-md mt-4 p-4 text-2xl"
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
