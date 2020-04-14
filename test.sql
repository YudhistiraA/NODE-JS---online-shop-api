-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2020 at 07:12 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id_barang` int(200) NOT NULL,
  `nama_barang` varchar(100) NOT NULL,
  `stok` int(255) NOT NULL,
  `harga` int(255) NOT NULL,
  `pemilik_barang` varchar(234) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id_barang`, `nama_barang`, `stok`, `harga`, `pemilik_barang`) VALUES
(28, 'bijnjhiidu', 6, 2000, 'yudhis'),
(30, 'baju', 670, 2000, 'yudhis');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(222) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `number` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `firstname`, `lastname`, `gender`, `email`, `password`, `number`) VALUES
(38, 'yhghghg', 'ghjklhghghghghgjdfskjfskljhhg', 'femaie', 'aryaooooou@a', '$2b$10$wngW7VvTVYm84Ky3iSIHRekT9jb/2dUdaO/M2ct/fDuYUkMQE/Tim', 234566),
(45, 'yhghghg', 'ghjklhghghghghgjdfskjfskljhhg', 'femaie', 'aryaooooou@a', '$2b$10$B76g.5oa8ZYKlrR77wnW7.nPb60tcHzj.IBMeIUSFjT5X8rlBqJgG', 234566),
(46, 'yhghghg', 'ghjklhghghghghgjdfskjfskljhhg', 'femaie', 'aryaooooou@a', '$2b$10$1iQcmw7dc7/4KJVvIAsPT.32Lmp9AG2qUYHkD6oVuQDBtxxjY56/O', 234566),
(47, 'yhghghg', 'ghjklhghghghghgjdfskjfskljhhg', 'femaie', 'aryaooooou@a', '$2b$10$d0exyrkk5/BWfsd1E1ClgehhwcQAKeUz9iF4QwDCg/ILAtfh5W0JK', 234566),
(48, 'yhghghg', 'ghjklhghghghghgjdfskjfskljhhg', 'femaie', 'aryaooooou@a', '$2b$10$s9lhipZ/nSnnEn9eG5VAz.ds.plaf9ehUmj7k1UCVC/p3V0C2xQ16', 234566),
(49, 'yhghghg', 'ghjklhghghghghgjdfskjfskljhhg', 'femaie', 'aryaooooou@a', '$2b$10$wkCmc9YBCaoQ7dWu.wu7ouyMuHw58F2A5XGyp1JNRUcwj3t8HyUp.', 234566),
(51, 'yhghghg', 'ghjklhghghghghgjdfskjfskljhhg', 'femaie', 'aryaooooou@a', '$2b$10$8AFv0P.uxU1yA93fQLvOo.5KZwJSu3nSQqAo4Tc0mZayyeZTZRJZi', 234566),
(53, 'yhghghg', 'ghjklhghghghghgjdfskjfskljhhg', 'femaie', 'aryaooooou@a', '$2b$10$krDqEXxymhFJ8hhLtYSgEex5W0SYs2YSwivA4UtbJKcvucEgvsU/.', 234566),
(54, 'yudhis', 'jj', 'lk', 'arya@ggg', '$2b$10$LME35ij9oA6MuHLhDwuQdO4keZ2UFnCc5m3Rbq5xLkY9gavGXg/cW', 12),
(55, 'lala', 'jj', 'lk', 'arya@gggg', '$2b$10$6naI9eQYnxaOqG8eyEKzC.w2DvJ1GuH0085CPDhwh5qyCw3iSQTuK', 12);

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id` int(254) NOT NULL,
  `total` int(254) NOT NULL,
  `jumlah` int(254) NOT NULL,
  `time` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `pemilik_barang` varchar(222) NOT NULL,
  `pembeli` varchar(234) NOT NULL,
  `nama_barang` varchar(200) NOT NULL,
  `harga` int(231) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id`, `total`, `jumlah`, `time`, `pemilik_barang`, `pembeli`, `nama_barang`, `harga`) VALUES
(1, 20000, 10, '2020-02-26 06:40:00.703031', 'yudhis', 'lala', 'baju', 2000),
(2, 20000, 10, '2020-02-26 06:40:25.780843', 'yudhis', 'lala', 'baju', 2000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id_barang`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id_barang` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id` int(254) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
