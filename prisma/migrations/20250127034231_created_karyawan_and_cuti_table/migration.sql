-- CreateTable
CREATE TABLE `cuti` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomor_induk` VARCHAR(10) NOT NULL,
    `tanggal_cuti` DATE NOT NULL,
    `lama_cuti` INTEGER NOT NULL,
    `keterangan` VARCHAR(50) NOT NULL,

    INDEX `nomor_induk`(`nomor_induk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `karyawan` (
    `nomor_induk` VARCHAR(10) NOT NULL,
    `nama` VARCHAR(50) NOT NULL,
    `alamat` VARCHAR(100) NOT NULL,
    `tanggal_lahir` DATE NOT NULL,
    `tanggal_bergabung` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`nomor_induk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cuti` ADD CONSTRAINT `cuti_ibfk_1` FOREIGN KEY (`nomor_induk`) REFERENCES `karyawan`(`nomor_induk`) ON DELETE RESTRICT ON UPDATE RESTRICT;
