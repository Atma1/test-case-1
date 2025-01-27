import express from 'express';
import { Request, Response } from "express-serve-static-core";
import { getKaryawanByName, getAllKaryawan, createKaryawan, updateKaryawan, deleteKaryawan, getKaryawanById, getAllCutiByNomorInduk } from "./karyawan.service";
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const nama = req.query.nama as string;
        let karyawan;
        if (nama) {
            karyawan = await getKaryawanByName(nama);
        } else {
            karyawan = await getAllKaryawan();
        }
        res.send(karyawan);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

router.get("/:nomorInduk/cuti", async (req: Request, res: Response) => {
    try {
        const nomorInduk = req.params.nomorInduk as string;
        const cuti = await getAllCutiByNomorInduk(nomorInduk);
        res.send(cuti);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('Unknown error');
        }
    }
});

router.get("/:nomorInduk", async (req, res) => {
    try {
        const nomorInduk = req.params.nomorInduk;
        const karyawan = await getKaryawanById(nomorInduk);
        res.send(karyawan);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
})

router.post("/", async (req, res) => {
    try {
        const karyawanData = req.body;
        const createdKaryawan = await createKaryawan(karyawanData);

        res.status(201).send(createdKaryawan);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
})

router.post("/update", async (req, res) => {
    try {
        const nomorInduk = req.query.nomorInduk as string;
        const karyawanData = req.body
        const updatedKaryawan = await updateKaryawan(nomorInduk, karyawanData);
        res.send(updatedKaryawan);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
})

router.post("/delete", async (req, res) => {
    try {
        const nomorInduk = req.query.nomorInduk as string;
        await deleteKaryawan(nomorInduk);
        res.send({
            message: `Successfully deleted karyawan ${nomorInduk}!`
        })
    } catch (error: any) {
        res.status(400).send(error.message);
    }
})

export default router;
