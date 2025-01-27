import { Request, Response } from "express-serve-static-core";
import express from 'express';
import { getAllCutiByDate, getAllCuti, createCuti, updateCuti, deleteCuti } from "./cuti.service";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const tanggalCuti = req.query.tanggalCuti as string;
        let cuti;
        if (tanggalCuti) {
            cuti = await getAllCutiByDate(tanggalCuti);
        } else {
            cuti = await getAllCuti();
        }
        res.send(cuti);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('Unknown error');
        }
    }
});


router.post("/", async (req: Request, res: Response) => {
    try {
        const cutidata = req.body;
        const karyawan = await createCuti(cutidata);
        res.status(201).send(karyawan);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('Unknown error');
        }
    }
});

router.post("/update", async (req: Request, res: Response) => {
    try {
        const id = req.query.id as string;
        const numberId = parseInt(id);
        const dataCuti = req.body;
        const karyawan = await updateCuti(numberId, dataCuti);
        res.send(karyawan);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('Unknown error');
        }
    }
});

router.delete("/delete", async (req: Request, res: Response) => {
    try {
        const id = req.query.id as string;
        const idNumber = parseInt(id);
        await deleteCuti(idNumber);
        res.send({
            message: `Successfully deleted the cuti with id ${idNumber}!`
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('Unknown error');
        }
    }
});

export default router;