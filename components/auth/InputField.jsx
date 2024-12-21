import React from "react";

export default function InputField({ label, type, name, register, errors, validation }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={label}
        className={`w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red ${
          errors[name] ? "border-red-500" : ""
        }`}
        {...register(name, validation)}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1 text-start">{errors[name]?.message}</p>
      )}
    </div>
  );
}
