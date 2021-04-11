import React, { createContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider(props) {
  const [dark, setDark] = useState(window.localStorage.getItem("darkTheme"));

  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");
    console.log("lastTheme:", lastTheme);

    if (lastTheme === true) {
      setDark(false);
      //   applyTheme(lightTheme);
    }

    if (!lastTheme || lastTheme === false) {
      setDark(true);
      //   applyTheme(darkTheme);
    }

    // if state changes, repaints the app
  }, [dark]);

  const toggle = () => {
    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
