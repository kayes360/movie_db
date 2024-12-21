import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/common/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({ children }) {
  return (
    <div className={`${inter.className} bg-black text-white`}>
        <NavBar />
        {children}
    </div>
  );
}
