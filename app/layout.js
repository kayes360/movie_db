import { Inter } from "next/font/google";
import "./globals.css";
import StateProvider from "./providers/StateProvider";
import { dbConnect } from "./services/mongo";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie DB",
  description: "Latest Movie Info Website",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <AuthProvider>
        <StateProvider>{children}</StateProvider>

        </AuthProvider>
      </body>
    </html>
  );
}
