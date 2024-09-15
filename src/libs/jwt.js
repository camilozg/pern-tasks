import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
} 