"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AuthChecker() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const logout = () => {
    setAuth({});
    router.push("/");
  }; 
  return (
    <div className="flex items-center space-x-4">
      {auth?.user ? (
        <>
          <span className="text-white">{auth?.user?.firstName}</span>
          <button onClick={logout} className="text-white hover:text-gray-300">
            Logout
          </button>
        </>
      ) : (
        <Link href="/login" className="text-white hover:text-gray-300">
          Sign In
        </Link>
      )}
    </div>
  );
}
