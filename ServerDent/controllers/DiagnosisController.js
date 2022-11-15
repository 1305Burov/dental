import DiagnosisModel  from '../models/Diagnosis.js';

export const getAll = async (req, res) => {
    try {
        const diagnosis = await DiagnosisModel.find();

        res.json(diagnosis);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось получить список врачей!'
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new DiagnosisModel({
            name: req.body.name,
            visitNumber: req.body.visitNumber
        })

        const diagnosis = await doc.save();

        res.json(diagnosis);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось создать!'
        })
    }
}

export const remove = async (req, res) => {
    try {
        const diagnosisId = req.params.id;

        DiagnosisModel.findOneAndDelete({
            _id: diagnosisId,
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
        const diagnosisId = req.params.id;

        await DiagnosisModel.updateOne({
            _id: diagnosisId
        },
        {
            name: req.body.name,
            visitNumber: req.body.visitNumber
        });

        res.json({
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось обновить диагноз'
        })
    }
}