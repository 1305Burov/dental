import mongoose from 'mongoose';

const AppoitmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        doctorId: {
            type: String,
            require: true,
        },
        teethId: {
            type: Number,
        },
        patientId: {
            type: String,           
        },
        diagnos: {
            type: String,
        },
        healing: {
            type: String,
        },
        note: {
            type: String,
            default: '',
        },
        date: {
            type: String,
            require: true,
        },
        time: {
            type: Object,
            require: true,
        },
        isAppointment: {
            type: Boolean,
            require: true,
        },
    }
);

export default mongoose.model('Appoitment', AppoitmentSchema);

