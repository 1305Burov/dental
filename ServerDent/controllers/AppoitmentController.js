import AppoitmentModel  from '../models/Appoitment.js';

export const getAll = async (req, res) => {
    try {
        const query = req.query;
        
        if (!(Object.keys(query).length === 0)) {
            const appoitment = await AppoitmentModel.find(query);  
            
            res.json(appoitment);         
        } else {
            const appoitment = await AppoitmentModel.find();

            res.json(appoitment);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось получить список пациентов!'
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const appoitmentId = req.params.id; // получение динамического значения (:id), который передается в запросе в сыллке 
        
        AppoitmentModel.findOne({
            _id: appoitmentId, // id of a searching post
        },
        (err, doc) => {
            if (err) {
                console.log(error);
                return res.status(500).json({
                    message: 'Не удалось получить пациента'
                })
            }

            if (!doc) {
                return res.status(404).json({
                    message: 'Пациент не найден'
                })
            }

            res.json(doc);            
        }
    )

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось получить пациента'
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new AppoitmentModel({
            patientId: req.body.patientId,
            doctorId: req.body.doctorId,
            teethId: req.body.teethId,
            name: req.body.name,
            diagnos: req.body.diagnos,
            healing: req.body.healing,
            note: req.body.note,
            date: req.body.date,
            time: req.body.time,
            isAppointment: req.body.isAppointment,
        })

        const appoitment = await doc.save();

        res.json(appoitment);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось создать!'
        })
    }
}

export const remove = async (req, res) => {
    try {
        const appoitmentId = req.params.id;

        AppoitmentModel.findOneAndDelete({
            _id: appoitmentId,
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

export const removePatiensAppoitments = async (req, res) => {
    try {
        const query = req.query;

        if (query.patientId) {
            AppoitmentModel.deleteMany({
                patientId: query.patientId,
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
        }
    } catch (error) {
        
    }
}

export const update = async (req, res) => {
    try {
        const appoitmentId = req.params.id;

        await AppoitmentModel.updateOne({
            _id: appoitmentId
        },
        {
            patientId: req.body.patientId,
            doctorId: req.body.doctorId,
            teethId: req.body.teethId,
            name: req.body.name,
            diagnos: req.body.diagnos,
            healing: req.body.healing,
            note: req.body.note,
            date: req.body.date,
            time: req.body.time,
            isAppointment: req.body.isAppointment,
        });

        AppoitmentModel.findOne({
            _id: appoitmentId, 
        },
        (err, doc) => {
            if (err) {
                console.log(error);
                return res.status(500).json({
                    message: 'Не удалось получить запись'
                })
            }

            if (!doc) {
                return res.status(404).json({
                    message: 'Запись не найдена'
                })
            }

            res.json(doc);            
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось обновить пациента'
        })
    }
}