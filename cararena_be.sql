-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2020 at 07:19 AM
-- Server version: 10.4.12-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `review` text DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `generalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(1, 'user', '2020-06-24 07:06:38', '2020-06-24 07:06:38'),
(2, 'admin', '2020-06-24 07:06:38', '2020-06-24 07:06:38');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `general`
--
ALTER TABLE `general`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `imgCar`
--
ALTER TABLE `imgCar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `specification`
--
ALTER TABLE `specification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
