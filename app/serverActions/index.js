"use server";

import { redirect } from "next/navigation";
import { addToWatchLater, createUser, findUserByCredentials, removeFromWatchLater } from "../dbQueries/queries";
import { userModel } from "@/models/user-model";

export async function registerUser(formData) { 

  const userExist = await userModel.findOne({ email: formData.email });
  if (userExist) {
    // If the email exists, return an error or handle it accordingly
    return { error: "Email address is already in use" };
  }
  const created = await createUser(formData);
  redirect("/login");
}
export async function loginUser(formData){
    try {
        let credentials ={}
        credentials.email = formData.email
        credentials.password = formData.password
        const foundUser = findUserByCredentials(credentials)

        return foundUser
    } catch (error) {
        throw new Error(`User with email ${formData.email} not found`);
    }
}

export async function addingToWatchLater(movie,userId) {
    try {
        await addToWatchLater(movie,userId)
    } catch (error) {
        throw new Error(`Could not add to watch later`);
    }
}
export async function removingFromWatchLater(movie,userId) {
    try {
        await removeFromWatchLater(movie,userId)
    } catch (error) {
        throw new Error(`Could not add to watch later`);
    }
}