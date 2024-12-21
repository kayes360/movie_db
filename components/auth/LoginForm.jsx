"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { loginUser } from "@/app/serverActions";
import { useAuth } from "@/app/hooks/useAuth"; 
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const {setAuth} = useAuth();
const router = useRouter()
  const submitForm = async (formData) => {
    setError(""); // Clear previous error messages

    try {
      const foundUser = await loginUser(formData);

      if (foundUser) {
         setAuth({user: foundUser})
         router.push('/')
      }
    } catch (error) {
      setError(error.message); // Display backend error messages
    }
  };
  return (
    <form
      id="loginForm"
      className="space-y-4"
      onSubmit={handleSubmit(submitForm)}
    >
       <InputField
        label="Email Address"
        type="email"
        name="email"
        register={register}
        errors={errors}
        validation={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        }}
      /> 
     <InputField
        label="Enter Password"
        type="password"
        name="password"
        register={register}
        errors={errors}
        validation={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        }}
      />


{error && <div className="text-red-500 text-sm mt-1 text-start">{error}</div>}
      <button
        type="submit"
        className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
      >
        Sign In
      </button>
    </form>
  );
}
