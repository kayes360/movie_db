 import { userModel } from "@/models/user-model"
import { replaceMongoIdInObject } from "@/utils/data-utils";
import bcrypt from "bcrypt";

export async function createUser(user) { 
    const hashedPassword = await bcrypt.hash(user.password, 10); // 
    user.password = hashedPassword;   
    return await userModel.create(user);
  }
 

  export async function findUserByCredentials(credentials) {
    const { email, password } = credentials;
   
    const user = await userModel.findOne({ email }).lean();
  
    if (!user) {
      throw new Error("Email not found"); 
    }
   
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Incorrect password");  
    }
   
    return replaceMongoIdInObject(user);
  }

  export async function addToWatchLater(movie, userId) {
    try {
      const user = await userModel.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
  
      const movieExists = user.watchLater.some((item) => item.id === movie.id);
  
      if (movieExists) {
        throw new Error("Movie is already in the Watch Later list");
      }
  
      user.watchLater.push(movie);
  
      await user.save();
  
      return user.watchLater;
    } catch (error) {
      console.error("Error adding to Watch Later:", error.message);
      throw error;
    }
  }
  
  export async function removeFromWatchLater(movie, userId) {
    try {
      const user = await userModel.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
  
      // Find the index of the movie in the watchLater list
      const movieIndex = user.watchLater.findIndex(
        (item) => item.id === movie.id
      );
  
      if (movieIndex === -1) {
        throw new Error("Movie not found in the Watch Later list");
      }
  
      // Remove the movie from the watchLater array
      user.watchLater.splice(movieIndex, 1);
  
      await user.save();
  
      return user.watchLater;
    } catch (error) {
      console.error("Error removing from Watch Later:", error.message);
      throw error;
    }
  }