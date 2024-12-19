'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import { ComparisonContext } from "./context/ComparisonContext";
import { useEffect, useReducer, useState } from "react";
import { compareReducer, initialState } from "./reducer/compareReducer";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) { 
    const [state, dispatch] = useReducer(compareReducer, initialState);
    useEffect(() => {
        localStorage.setItem("comparisonState", JSON.stringify(state));
      }, [state]);
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <ComparisonContext.Provider value={{state, dispatch}}>
        <NavBar/>
        {children}
        </ComparisonContext.Provider>
        
    </body>
    </html>
  );
}
