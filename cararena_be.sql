-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2020 at 03:46 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cararena_be`
--

-- --------------------------------------------------------

--
-- Table structure for table `background`
--

CREATE TABLE `background` (
  `id` int(11) NOT NULL,
  `url_img1` varchar(255) DEFAULT '-',
  `url_img2` varchar(255) DEFAULT '-',
  `url_img3` varchar(255) DEFAULT '-',
  `createdAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `background`
--

INSERT INTO `background` (`id`, `url_img1`, `url_img2`, `url_img3`, `createdAt`) VALUES
(1, 'https://d2pa5gi5n2e1an.cloudfront.net/webp/service/id/images/article/10292_ID/LMY_summary.jpg', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/service/id/images/article/10280_ID/LMY_summary.jpg', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/service/id/images/article/10270_ID/LMY_summary.jpg', '2020-06-10');

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `carBrand` varchar(255) NOT NULL,
  `logoUrl` varchar(255) NOT NULL,
  `createdAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `carBrand`, `logoUrl`, `createdAt`) VALUES
(1, 'Aston Martin', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/maker/cars/S_aston_martin.png', '2020-04-23'),
(2, 'Audi', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/maker/cars/S_audi.png', '2020-04-23'),
(3, 'Bentley', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/maker/cars/S_bentley.png', '2020-04-23'),
(4, 'BMW', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/maker/cars/S_bmw.png', '2020-04-23'),
(5, 'Daihatsu', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/maker/cars/S_daihatsu.png', '2020-04-23');

-- --------------------------------------------------------

--
-- Table structure for table `general`
--

CREATE TABLE `general` (
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `hargaOtr` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `brandId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `general`
--

INSERT INTO `general` (`id`, `type`, `hargaOtr`, `createdAt`, `brandId`) VALUES
(1, 'Aston Martin DB11', 'Rp 4,33 Milyar Rp 7,7 Milyar\r\n', '2020-04-01', 1),
(2, 'Aston Martin Vantage', 'Rp 4,5 Milyar', '2020-04-02', 1),
(3, 'Audi Q8', 'Rp 2,46 Milyar\r\n', '2020-04-10', 2),
(4, 'Audi A8', 'Rp 2,95 Milyar\r\n', '2020-04-20', 2),
(5, 'BMW i3', 'Rp 1,47 Milyar\r\n', '2020-04-21', 4),
(6, 'Bentley Continental GT', 'Rp 8 Milyar\r\n', '2020-06-08', 3),
(7, 'Daihatsu Ayla ', 'Rp 101,65 Juta Rp 159,4 Juta\r\n', '2020-06-10', 5);

-- --------------------------------------------------------

--
-- Table structure for table `imgCar`
--

CREATE TABLE `imgCar` (
  `id` int(11) NOT NULL,
  `img1` varchar(255) DEFAULT '-',
  `img2` varchar(255) DEFAULT '-',
  `img3` varchar(255) DEFAULT '-',
  `createdAt` date DEFAULT NULL,
  `specificationId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `imgCar`
--

INSERT INTO `imgCar` (`id`, `img1`, `img2`, `img3`, `createdAt`, `specificationId`) VALUES
(1, 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Aston_Martin_DB11/1/color/01_Yellow/2M_1.jpg', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Aston_Martin_DB11/1/color/02_Orange/2M_1.jpg', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Aston_Martin_DB11/1/color/03_Midnight-Blue/2M_1.jpg', '2020-04-23', 1),
(2, 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Aston_Martin_Vantage/6/exterior/exterior_2M_1.jpg', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Aston_Martin_Vantage/6/exterior/exterior_2M_2.jpg', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Aston_Martin_Vantage/6/exterior/exterior_2M_3.jpg', '2020-04-23', 2),
(3, 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Audi_Q8/1/color/01_Carrara-White/2M_1.jpg', '-', '-', '2020-04-23', 4),
(4, 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Audi_A8/6/exterior/exterior_2M_1.jpg', '-', '-', '2020-04-23', 3),
(5, 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/BMW_i3/1/color/01_Capparis-White/2M_1.jpg', '-', '-', '2020-04-23', 5),
(6, 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Bentley_Continental_GT/3/exterior/exterior_2M_1.jpg', '-', '-', '2020-04-23', 6),
(7, 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Daihatsu_Alya/3/color/01_Ultra-Black-Solid/2M_1.jpg', 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/car_models/Daihatsu_Alya/3/color/02_Dark-Grey-Metallic/2M_1.jpg', '-', '2020-04-23', 7);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `generalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `name`, `review`, `createdAt`, `generalId`) VALUES
(1, 'fall', 'bagus kok', '2020-06-10', 1);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2020-06-10 12:55:24', '2020-06-10 12:55:24'),
(2, 'admin', '2020-06-10 12:55:24', '2020-06-10 12:55:24');

-- --------------------------------------------------------

--
-- Table structure for table `specification`
--

CREATE TABLE `specification` (
  `id` int(11) NOT NULL,
  `kapasistasMesin` varchar(255) DEFAULT '-',
  `jmlSilinder` varchar(255) DEFAULT '-',
  `jmlKatup` varchar(255) DEFAULT '-',
  `drivetrain` varchar(255) DEFAULT '-',
  `maxTenaga` varchar(255) DEFAULT '-',
  `maxTorsi` varchar(255) DEFAULT '-',
  `jenisBahanBakar` varchar(255) DEFAULT '-',
  `kapasitasBahanBakar` varchar(255) DEFAULT '-',
  `banLebar` varchar(255) DEFAULT '-',
  `banAspekRasio` varchar(255) DEFAULT '-',
  `banDiameter` varchar(255) DEFAULT '-',
  `suspensiDepan` varchar(255) DEFAULT '-',
  `suspensiBelakang` varchar(255) DEFAULT '-',
  `tipeTransmisi` varchar(255) DEFAULT '-',
  `tipeGearBox` varchar(255) DEFAULT '-',
  `dimensiPanjang` varchar(255) DEFAULT '-',
  `dimanesiLebar` varchar(255) DEFAULT '-',
  `dimensiTinggi` varchar(255) DEFAULT '-',
  `dimensiSumbuRoda` varchar(255) DEFAULT '-',
  `dimensiGroundClearance` varchar(255) DEFAULT '-',
  `dimensiBerat` varchar(255) DEFAULT '-',
  `dimensiKargo` varchar(255) DEFAULT '-',
  `jmlPintu` varchar(255) DEFAULT '-',
  `jmlKuris` varchar(255) DEFAULT '-',
  `createdAt` date DEFAULT NULL,
  `generalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `specification`
--

INSERT INTO `specification` (`id`, `kapasistasMesin`, `jmlSilinder`, `jmlKatup`, `drivetrain`, `maxTenaga`, `maxTorsi`, `jenisBahanBakar`, `kapasitasBahanBakar`, `banLebar`, `banAspekRasio`, `banDiameter`, `suspensiDepan`, `suspensiBelakang`, `tipeTransmisi`, `tipeGearBox`, `dimensiPanjang`, `dimanesiLebar`, `dimensiTinggi`, `dimensiSumbuRoda`, `dimensiGroundClearance`, `dimensiBerat`, `dimensiKargo`, `jmlPintu`, `jmlKuris`, `createdAt`, `generalId`) VALUES
(1, '5200', '12', '48', 'RWD', '715/6500', '900/1800-5000', 'Bensin', '78', '295', '35', 'R20', 'Independent Double Wishbone', 'Multi-Link Coil springs', 'Otomatis', '8-Speed', '4712', '2146', '1280', '2805', '120', '-', '-', '-', '-', '2020-04-23', 1),
(2, '3982', '8', '32', 'RWD', '510 / 6000\r\n', '685 / 2000-5000\r\n', 'Bensin', '73', '255', '40', 'R20', 'Double wishbone\r\n', 'Multi-link independent\r\n', 'Otomatis', '8-Speed\r\n', '4465', '2153', '1273\r\n', '2704', '-', '1530', '-', '2', '2', '2020-04-23', 2),
(3, '2995', '6', '24', 'AWD', '310/5200\r\n', '440/2900\r\n', 'Bensin', '82', '235', '55', 'R18', 'Multi-Link\r\n', 'Multi-Link\r\n', 'Otomatis', '8-Speed\r\n', '5265', '1949', '1460\r\n', '3122', '-', '1855\r\n', '490', '4', '5', '2020-04-23', 4),
(4, '2995', '6\r\n', '24', 'AWD', '340 / 5000-6400\r\n', '500 / 1370-4500\r\n', 'Bensin', '85', '285', '45', 'R21', 'Independent multi-link\r\n', 'Independent, spring multi-link with stabilizer\r\n', 'Otomatis', '8-Triptronic\r\n', '4986', '1995', '1705', '2995', '-', '2095', '605', '5', '5', '2020-04-23', 3),
(5, '-', '-', '-', 'RWD', '102 / 4,800\r\n', '270 / -\r\n', 'Listrik', '-', '175', '55', 'R20', 'McPherson', 'Multi-link independent\r\n', 'Otomatis', '-', '4006', '1791', '1590', '2570', '131', '1290', '260', '4', '5', '2020-04-23', 5),
(6, '5950', '12', '48', 'AWD', '635/6000', '900/1350-4500', 'Bensin', '90', '265', '40', 'R21', 'Independent, spring, Pneumatic elastic element	', 'Multi-link independent, Pneumatic elastic element	', 'Otomatis', '8-Speed	', '4805', '2187', '1405', '2851', '-', '2244', '358', '2', '4', '2020-04-23', 6),
(7, '998', '3', '12', 'FWD', '65/6.000	', '86/3.600	', 'Bensin', '33', '155', '80', 'R13', 'McPherson Struts	', 'Semi Independent Torsion Axle Beam	', 'Manual', '5-Speed	', '3640', '1520', '2455', '180', '180', '770', '-', '5', '5', NULL, 7);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'fall', 'fall@gmail.com', '$2a$08$TGZEzJglWVMjEbs6/zbJAekehwWh6M4u4Xwa1tui0RST3DnggI9d2', '2020-06-10 13:01:58', '2020-06-10 13:01:58');

-- --------------------------------------------------------

--
-- Table structure for table `userRole`
--

CREATE TABLE `userRole` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userRole`
--

INSERT INTO `userRole` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2020-06-10 13:01:58', '2020-06-10 13:01:58', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `background`
--
ALTER TABLE `background`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general`
--
ALTER TABLE `general`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brandId` (`brandId`);

--
-- Indexes for table `imgCar`
--
ALTER TABLE `imgCar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `specificationId` (`specificationId`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `generalId` (`generalId`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specification`
--
ALTER TABLE `specification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `generalId` (`generalId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userRole`
--
ALTER TABLE `userRole`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `background`
--
ALTER TABLE `background`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `general`
--
ALTER TABLE `general`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `imgCar`
--
ALTER TABLE `imgCar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `specification`
--
ALTER TABLE `specification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `general`
--
ALTER TABLE `general`
  ADD CONSTRAINT `general_ibfk_1` FOREIGN KEY (`brandId`) REFERENCES `brand` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `imgCar`
--
ALTER TABLE `imgCar`
  ADD CONSTRAINT `imgcar_ibfk_1` FOREIGN KEY (`specificationId`) REFERENCES `specification` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`generalId`) REFERENCES `general` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `specification`
--
ALTER TABLE `specification`
  ADD CONSTRAINT `specification_ibfk_1` FOREIGN KEY (`generalId`) REFERENCES `general` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `userRole`
--
ALTER TABLE `userRole`
  ADD CONSTRAINT `userrole_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userrole_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
