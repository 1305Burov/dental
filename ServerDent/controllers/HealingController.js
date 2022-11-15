import HealingModel  from '../models/Healing.js';

export const getAll = async (req, res) => {
    try {
        const healing = await HealingModel.find();

        res.json(healing);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось получить список лечений!'
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new HealingModel({
            name: req.body.name,
            visitNumber: req.body.visitNumber
        })

        const healing = await doc.save();

        res.json(healing);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось создать!'
        })
    }
}

export const remove = async (req, res) => {
    try {
        const healingId = req.params.id;

        HealingModel.findOneAndDelete({
            _id: healingId,
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
        const healingId = req.params.id;

        await HealingModel.updateOne({
            _id: healingId
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
            message: 'Не удалось обновить лечение'
        })
    }
}