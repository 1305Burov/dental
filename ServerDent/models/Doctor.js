import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        }
    }
);

export default mongoose.model('Doctor', DoctorSchema);