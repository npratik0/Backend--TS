import mongoose from "mongoose";
import { MONGODB_URI } from "../config";

export async function conncetDatabase() {
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('Connect to MOngoDB');
    }catch (error){
        console.log("Database Error: ", error);
        process.exit(1); // Exit process with failure
    }
}