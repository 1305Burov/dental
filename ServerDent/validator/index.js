import { body } from "express-validator";

export const nameValidator = [
    body('name', 'Недопустимое значение').trim().isLength({ min: 3 }),
]

export const visitNumValidator = [
    body('visitNumber', 'Недопустимое значение').trim().isNumeric().optional(),
]

export const patientValidator = [
    body('name', 'Недопустимое значение').trim().isLength({ min: 3 }),
    body('doctorId', 'Недопустимое значение').trim(),
]

export const appointmentValidator = [
    body('name', 'Недопустимое значение').trim(),
    body('doctorId', 'Недопустимое значение').trim(),
]

export const updateValidator = [
    body('name', 'Недопустимое значение').trim().isLength({ min: 3 }).optional(),
    body('visitNumber', 'Недопустимое значение').trim().isNumeric().optional(),
]