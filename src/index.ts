import express from 'express';
import dotenv from 'dotenv';
import karyawanController from './karyawan/karyawan.controller';
import cutiController from './cuti/cuti.controller';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/karyawan', karyawanController);
app.use('/cuti', cutiController);


app.listen(PORT, () => {
    console.log("API is running on port: " + PORT);
})

