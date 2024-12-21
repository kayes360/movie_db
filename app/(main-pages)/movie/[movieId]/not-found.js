"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const id = pathName?.split("/").pop();
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 ">
      <div className="bg-neutral-800 w-96 flex flex-col justify-center items-center p-5 rounded-lg">
        <h2>Not Found</h2>
        <p>
          Could not find movie with id{" "}
          <span className="text-blue-600 font-bold">{id}</span>{" "}
        </p>
        <Link
          href="/"
          className="my-4 text-white hover:text-white border border-white hover:bg-blue-800   focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
