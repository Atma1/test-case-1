import prisma from "../db";

export interface CutiData {
    id: number;
    nomorInduk: string;
    tanggalCuti: string;
    lamaCuti: number;
    keterangan: string;
}

export const findByDateCuti = async (tanggalCuti: string) => {
    return await prisma.cuti.findMany({
        where: {
            tanggal_cuti: {
                equals: new Date(tanggalCuti)
            }
        }
    });
}

export const getAll = async () => {
    return await prisma.cuti.findMany();

}

export const getById = async (id: number) => {
    return await prisma.cuti.findUnique({
        where: {
            id: id,
        },
    })
}

export const findCutiByNomorInduk = async (nomorInduk: string) => {
    return await prisma.cuti.findMany({
        where: {
            nomor_induk: nomorInduk,
        },
        include: {
            karyawan: true
        }
    });
}

export const insertCuti = async (cutidata: CutiData) => {
    return await prisma.cuti.create({
        data: {
            nomor_induk: cutidata.nomorInduk,
            tanggal_cuti: new Date(cutidata.tanggalCuti),
            lama_cuti: cutidata.lamaCuti,
            keterangan: cutidata.keterangan,
        }
    });
}

export const editCuti = async (id: number, cutidata: CutiData) => {
    return await prisma.cuti.update({
        where: {
            id: id,
        },
        data: {
            nomor_induk: cutidata.nomorInduk,
            tanggal_cuti: new Date(cutidata.tanggalCuti),
            lama_cuti: cutidata.lamaCuti,
            keterangan: cutidata.keterangan,
        }
    });
}

export const deleteId = async (id: number) => {
    await prisma.cuti.delete({
        where: {
            id: id,
        }
    });
}