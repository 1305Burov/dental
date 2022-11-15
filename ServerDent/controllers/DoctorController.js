import DoctorModel  from '../models/Doctor.js';

export const getAll = async (req, res) => {
    try {
        const doctors = await DoctorModel.find();

        res.json(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось получить список врачей!'
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new DoctorModel({
            name: req.body.name
        })

        const doctor = await doc.save();

        res.json(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось создать!'
        })
    }
}

export const remove = async (req, res) => {
    try {
        const doctorId = req.params.id;

        DoctorModel.findOneAndDelete({
            _id: doctorId,
        }, (error, doc) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    message: 'Не удалось удалить!'
                })
            }

            if (!doc) {
                return res.status(404).json({
                    message: 'Не удалось найти и удалить'
                })
            }

            res.json({
                success: true
            })
        })
    } catch (error) {
        
    }
}