
import { Inter } from "next/font/google";
import "../globals.css"; 

const inter = Inter({ subsets: ["latin"] });

 

export default function AuthLayout({ children }) { 
    
  return ( 
      <div className={`${inter.className} bg-moviedb-black min-h-screen flex items-center justify-center`}>
         
        {children} 
        
    </div> 
  );
}
