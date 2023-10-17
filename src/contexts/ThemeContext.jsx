import { createContext } from "react";

export const ThemeContext = createContext(null)

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children }){
  const doc = window.document.querySelector('html')
  
  const toogleTheme = () => {
    if (doc.className === "") doc.className = "dark"
    else doc.className = ""
  }

  return <ThemeContext.Provider
  value={{ toogleTheme: toogleTheme }}>
    {children}
  </ThemeContext.Provider>
}