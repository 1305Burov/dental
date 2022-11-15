import { validationResult } from 'express-validator'; // валидация запросов от клиента

export default (req, res, next) => {
    // Если приходит ошибка валидации код останавливается 
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    next();
}