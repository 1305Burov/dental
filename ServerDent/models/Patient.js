import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        doctorId: {
            type: String,
            require: true,
        },
        birthdate: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        phone: {
            type: String,
            default: '',
        },
        notes: {
            type: String,
            default: '',
        },
        allergy: {
            type: String,
            default: '',
        },
        isTreated: {
            type: Boolean,
            default: false,
        },
        visitCount: {
            type: Number,
            default: 1,
        }
    }
);

export default mongoose.model('Patient', PatientSchema);
