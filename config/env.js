
import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    baseURL: process.env.BASE_URL,
    username: process.env.STUDENT_USERNAME,
    password: process.env.STUDENT_PASSWORD,
    
};