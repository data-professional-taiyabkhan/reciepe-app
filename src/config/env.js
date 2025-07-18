import "dotenv/config";
import dotenv from "dotenv";
dotenv.config();  // Ensure dotenv is configured to load environment variables

export const ENV = {
    PORT: process.env.PORT || 5001,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV:process.env.NODE_ENV,
};