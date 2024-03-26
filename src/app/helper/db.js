
import mongoose from 'mongoose';
import React from 'react'

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL)

} catch (error) {
        console.log("error---->".error);
    }
}

