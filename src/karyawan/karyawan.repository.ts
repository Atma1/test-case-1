import prisma from "../db";

export interface Karyawan {
    nomor_induk: string;
    nama: string;
    alamat: string;
    tanggal_lahir: string;
    tanggal_bergabung: string;
}

export const getByName = async (nama: string) => {
    return await prisma.karyawan.findMany({
        where: {
            nama: {
                contains: nama
            }
        }
    })

}

export const getAll = async () => {
    return await prisma.karyawan.findMany();

}

export const getById = async (nomorInduk: string) => {
    return await prisma.karyawan.findUnique({
        where: {
            nomor_induk: nomorInduk,
        },
        include: {
            cuti: true
        }
    })
}

export const insertKaryawan = async (dataKaryawan: Karyawan) => {
    return await prisma.karyawan.create({
        data: {
            nomor_induk: dataKaryawan.nomor_induk,
            nama: dataKaryawan.nama,
            alamat: dataKaryawan.alamat,
            tanggal_lahir: new Date(dataKaryawan.tanggal_lahir),
        }
    })
}

export const editKaryawan = async (nomorInduk: string, dataKaryawan: Karyawan) => {
    return await prisma.karyawan.update({
        where: {
            nomor_induk: nomorInduk,
        },
        data: {
            nomor_induk: dataKaryawan.nomor_induk,
            nama: dataKaryawan.nama,
            alamat: dataKaryawan.alamat,
            tanggal_lahir: new Date(dataKaryawan.tanggal_lahir),
        }
    })
}

export const deleteKaryawanById = async (nomorInduk: string) => {
    await prisma.karyawan.delete({
        where: {
            nomor_induk: nomorInduk,
        }
    });
}

export const findCutiByNomorInduk = async (nomorInduk: string) => {
    return await prisma.karyawan.findMany({
        where: {
            nomor_induk: nomorInduk,
        },
        include: {
            cuti: true
        }
    });
}