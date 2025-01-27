import { getById, getByName, getAll, deleteKaryawanById, insertKaryawan, editKaryawan, findCutiByNomorInduk } from "./karyawan.repository";
import { Karyawan } from "./karyawan.repository";

export const getKaryawanByName = (name: string) => {
    return getByName(name);
}

export const getAllKaryawan = () => {
    return getAll();
}

export const getKaryawanById = async (nomorInduk: string) => {
    const karyawan = await getById(nomorInduk);

    if (!karyawan) {
        throw new Error("Nomor induk ky not found");

    }

    return karyawan;
}

export const deleteKaryawan = async (nomorInduk: string) => {
    const karyawan = await getById(nomorInduk);

    if (!karyawan) {
        throw new Error("Nomor induk karyawan not found");

    }
    await deleteKaryawanById(nomorInduk);
}

export const createKaryawan = async (dataKaryawan: Karyawan) => {
    return await insertKaryawan(dataKaryawan);
}

export const updateKaryawan = async (nomorInduk: string, dataKaryawan: Karyawan) => {
    return await editKaryawan(nomorInduk, dataKaryawan);
}

export const getAllCutiByNomorInduk = async (nomorInduk: string) => {
    const cuti = await findCutiByNomorInduk(nomorInduk);

    if (!cuti) {
        throw new Error(`Karyawan with nomor induk ${nomorInduk} has no cuti!`);
    }

    return cuti;
}