import { z } from 'zod';

export const signupSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }).min(1, { message: "Name must be at least 1 characters long" }).max(255),

    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    }).email({ message: "Invalid email format" }),

    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    }).min(6, { message: "Password must be at least 6 characters long" }).max(255),
});

export const signinSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    }).email({ message: "Invalid email format" }),

    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    }).min(6, { message: "Password must be at least 6 characters long" }).max(255),
});