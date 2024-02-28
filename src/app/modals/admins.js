import mongoose, { Schema } from "mongoose";


const adminSchema = new Schema({
    name: String,
    email: String,
    password: String
});
export const admin = mongoose.models.admin || mongoose.model('admin', adminSchema)