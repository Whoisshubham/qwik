import mongoose, { Schema } from "mongoose";

const AppointmentSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    selectTestFor: String,
})

export const appoiments = mongoose.models.appointment || mongoose.model('appointment', AppointmentSchema)