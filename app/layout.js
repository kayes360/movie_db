
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import StateProvider from "./providers/StateProvider";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) { 
    
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <StateProvider >
        <NavBar/>
        {children}
        </StateProvider>
        
    </body>
    </html>
  );
}
