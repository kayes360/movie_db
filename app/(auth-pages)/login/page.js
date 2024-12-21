import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
      <div className="text-center mb-6">
        <Link href="/" className="text-red-600 text-4xl font-bold ">
          <span className="mb-6">MOVIE DB</span>
        </Link>
        <h1 className="text-white text-3xl font-bold mb-5">Sign In</h1>

        <LoginForm />

        <div className="mt-4 flex justify-between text-moviedb-text-gray text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>

        <div className="mt-6 text-moviedb-text-gray ">
          New to moviedb?
          <Link href="/register" className="ms-3 text-white hover:underline">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
}
