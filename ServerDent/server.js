import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';


import { DoctorController, DiagnosisController, HealingController, PatientController, AppoitmentController } from './controllers/index.js';

import handleValidatorErrors from "./validator/handleValidatorErrors.js";
import { nameValidator, visitNumValidator, updateValidator, patientValidator, appointmentValidator } from './validator/index.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:13135@cluster0.ztixpxg.mongodb.net/dental?retryWrites=true&w=majority')
.then( () => console.log('DB CONNECTED') )
.catch( (err) => console.log('DB ERROR', err) ) 

app.get('/doctors', DoctorController.getAll);
app.post('/doctors', nameValidator, handleValidatorErrors, DoctorController.create);
app.delete('/doctors/:id', DoctorController.remove);

app.get('/diagnoses', DiagnosisController.getAll);
app.post('/diagnoses', nameValidator, visitNumValidator, handleValidatorErrors, DiagnosisController.create);
app.delete('/diagnoses/:id', DiagnosisController.remove);
app.patch('/diagnoses/:id', updateValidator, handleValidatorErrors, DiagnosisController.update);

app.get('/healings', HealingController.getAll);
app.post('/healings', nameValidator, visitNumValidator, handleValidatorErrors, HealingController.create);
app.delete('/healings/:id', HealingController.remove);
app.patch('/healings/:id', updateValidator, handleValidatorErrors, HealingController.update);

app.get('/patients', PatientController.getAll);
app.post('/patients', patientValidator, handleValidatorErrors, PatientController.create);
app.get('/patients/:id', PatientController.getOne);
app.delete('/patients/:id', PatientController.remove);
app.patch('/patients/:id', updateValidator, handleValidatorErrors, PatientController.update);

app.get('/appointments', AppoitmentController.getAll);
app.post('/appointments', appointmentValidator, handleValidatorErrors, AppoitmentController.create);
app.get('/appointments/:id', AppoitmentController.getOne);
app.delete('/appointments/:id', AppoitmentController.remove);
app.delete('/appointments', AppoitmentController.removePatiensAppoitments);
app.patch('/appointments/:id', AppoitmentController.update);

app.listen(1234, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Ok');
});
