import { findByDateCuti, deleteId, insertCuti, editCuti, getAll, getById } from "./cuti.repository";
import { CutiData } from "./cuti.repository";

export const getAllCuti = async () => {
    return await getAll();
}

export const getAllCutiByDate = async (tanggalCuti: string) => {
    return await findByDateCuti(tanggalCuti);
}

export const deleteCuti = async (id: number) => {
    const cuti = await getById(id);
    if (!cuti) {
        throw new Error(`Cuti with id cuti ${id} is not found!`);
    }
    await deleteId(id);
}

export const createCuti = async (cutiData: CutiData) => {
    const cuti = await insertCuti(cutiData);
    return cuti;
}

export const updateCuti = async (id: number, cutiData: CutiData) => {
    const cuti = await getById(id);
    if (!cuti) {
        throw new Error(`Cuti with id cuti ${id} is not found!`);
    }
    const editedCuti = await editCuti(id, cutiData);
    return editedCuti;
}
