-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2023 at 01:47 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tokotipu_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Ahmad Fikri Haikal', 'fikaalm26@gmail.com', '$2b$10$.HellxIUSZZ6oVb83EzQq./SCDBjgyP9QTVPrHjUq.N0IMg1bmPxy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJBaG1hZCBGaWtyaSBIYWlrYWwiLCJlbWFpbCI6ImZpa2FhbG0yNkBnbWFpbC5jb20iLCJpYXQiOjE2ODYzOTA4MjUsImV4cCI6MTY4NjQ3NzIyNX0.mM16DXTACfnUlJ8xXP8i1XxkwG0FE9sOh_SHqCCMvh0', '2023-03-11 19:16:36', '2023-06-10 09:53:45'),
(2, 'Ahmad Fikri Haikal', 'fikaalm26@gmail.com', '$2b$10$T/3Q/O5mts/7X/FHZ6YVeuVetG9S2FPSRWdeEpqgSrXoNhtpv7qVq', NULL, '2023-03-15 14:39:05', '2023-03-15 14:39:05'),
(3, 'Muhammad Mizan Khalifi', 'mizan@gmail.com', '$2b$10$SnvYxpPwgRg1AyMnHTfgt.AgR8iG1w4cXkAxhBsrX3W56AHkY50iG', NULL, '2023-03-15 14:49:46', '2023-03-15 14:49:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
