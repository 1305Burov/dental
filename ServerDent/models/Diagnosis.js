import mongoose from 'mongoose';

const DiagnosisSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        visitNumber: {
            type: Number,
            default: 1,
        }
    }
);

export default mongoose.model('Diagnosis', DiagnosisSchema);

