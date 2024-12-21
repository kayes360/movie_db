"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { registerUser } from "@/app/serverActions";

export default function RegistrationForm() {
    const [serverError, setServerError] = useState(null); 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => { 
    const response = await registerUser(formData);

    if (response?.error) {
      setServerError(response.error); // Set error if email is already in use
    } else {
      setServerError(null); // Clear any previous errors
    }
  };

  const password = watch("password");

  return (
    <form
      id="signupForm"
      className="space-y-4"
      onSubmit={handleSubmit(submitForm)}
    >
      <InputField
        label="First Name"
        type="text"
        name="firstName"
        register={register}
        errors={errors}
        validation={{
          required: "First Name is required", 
        }}
      />
      <InputField
        label="Last Name"
        type="text"
        name="lastName"
        register={register}
        errors={errors}
        validation={{
          required: "Last Name is required", 
        }}
      />
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
        label="Create Password"
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
      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        register={register}
        errors={errors}
        validation={{
          required: "Please confirm your password",
          validate: (value) =>
            value === password || "Passwords do not match",
        }}
      />
      <div className="text-left text-moviedb-text-gray text-sm">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="termsAgreed"
            className="mr-2"
            {...register("termsAgreed", {
              required: "You must agree to the terms",
            })}
          />
          I agree to the Terms of Service and Privacy Policy
        </label>
        {errors.termsAgreed && (
          <p className="text-red-500 text-sm mt-1">
            {errors.termsAgreed.message}
          </p>
        )}
      </div>
      {serverError && (
        <p className="text-red-500 text-sm mt-1 text-start">{serverError}</p>
      )}
      <button
        type="submit"
        className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  );
}
