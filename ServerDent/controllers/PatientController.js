import PatientModel  from '../models/Patient.js';

export const getAll = async (req, res) => {
    try {
        const query = req.query;
        
        if (!(Object.keys(query).length === 0)) {
            const patient = await PatientModel.find(query);  

            res.json(patient);         
        }else {
            const patient = await PatientModel.find();

            res.json(patient);
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
        const patientId = req.params.id; // получение динамического значения (:id), который передается в запросе в сыллке 
        
        PatientModel.findOne({
            _id: patientId, // id of a searching post
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
        const doc = new PatientModel({
            name: req.body.name,
            doctorId: req.body.doctorId,
            birthdate: req.body.birthdate,
            address: req.body.address,
            phone: req.body.phone,
            notes: req.body.notes,
            allergy: req.body.allergy,
            isTreated: req.body.isTreated,
            visitCount: req.body.visitCount,
        })

        const patient = await doc.save();

        res.json(patient);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось создать!'
        })
    }
}

export const remove = async (req, res) => {
    try {
        const patientId = req.params.id;

        PatientModel.findOneAndDelete({
            _id: patientId,
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


export const update = async (req, res) => {
    try {
        const patientId = req.params.id;

        await PatientModel.updateOne({
            _id: patientId
        },
        {
            // doctorId: req.body.doctorId,
            name: req.body.name,
            birthdate: req.body.birthdate,
            address: req.body.address,
            phone: req.body.phone,
            notes: req.body.notes,
            allergy: req.body.allergy,
            isTreated: req.body.isTreated,
            visitCount: req.body.visitCount,
        });
    
        PatientModel.findOne({
            _id: patientId, 
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
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось обновить пациента'
        })
    }
}