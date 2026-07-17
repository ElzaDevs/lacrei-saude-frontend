"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import {
  lightTheme,
  darkTheme,
} from "../styles/theme";


type ThemeMode = "light" | "dark";


interface ThemeContextProps {

  theme: ThemeMode;

  toggleTheme: () => void;

}


const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);



export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {


const [theme,setTheme] = useState<ThemeMode>(()=>{


  if(typeof window !== "undefined"){

    const saved =
      localStorage.getItem("theme") as ThemeMode | null;


    if(saved === "dark" || saved === "light"){

      return saved;

    }

  }


  return "light";


});



const toggleTheme = ()=>{


setTheme((current)=>{


const next =
current === "light"
? "dark"
: "light";


if(typeof window !== "undefined"){

localStorage.setItem(
"theme",
next
);

}


return next;


});


};



return(

<ThemeContext.Provider
value={{
theme,
toggleTheme,
}}
>


<StyledThemeProvider
theme={
theme === "light"
? lightTheme
: darkTheme
}
>

{children}

</StyledThemeProvider>


</ThemeContext.Provider>


);


}



export function useTheme(){

const context = useContext(ThemeContext);


if(!context){

throw new Error(
"useTheme must be used inside ThemeProvider"
);

}


return context;


}