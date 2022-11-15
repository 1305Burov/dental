import mongoose from 'mongoose';

const HealingSchema = new mongoose.Schema(
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

export default mongoose.model('Healing', HealingSchema);

