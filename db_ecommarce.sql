-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2023 at 08:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ecommarce`
--

-- --------------------------------------------------------

--
-- Table structure for table `annual_pay`
--

CREATE TABLE `annual_pay` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `annual_pay`
--

INSERT INTO `annual_pay` (`id`, `name`, `status`, `entry_by`) VALUES
(1, 'Registered Nurse', 1, 1),
(2, 'Software Developer', 1, 1),
(3, 'Marketing Manager', 1, 1),
(4, 'Financial Analyst', 1, 1),
(5, 'Mechanical Engineer', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `apply_job`
--

CREATE TABLE `apply_job` (
  `id` int(11) NOT NULL,
  `job_publish_id` int(11) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `candidate_name` varchar(255) DEFAULT NULL,
  `candidate_address` varchar(255) DEFAULT NULL,
  `candidate_email` varchar(255) DEFAULT NULL,
  `candidate_num` varchar(255) DEFAULT NULL,
  `total_year_exp` varchar(255) DEFAULT NULL,
  `educa_qualifcation` text DEFAULT NULL,
  `skill_set` text DEFAULT NULL,
  `expeted_salary` varchar(255) DEFAULT NULL,
  `files` varchar(255) DEFAULT NULL,
  `application_date` date DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `apply_job`
--

INSERT INTO `apply_job` (`id`, `job_publish_id`, `job_title`, `candidate_name`, `candidate_address`, `candidate_email`, `candidate_num`, `total_year_exp`, `educa_qualifcation`, `skill_set`, `expeted_salary`, `files`, `application_date`, `remarks`, `status`, `entry_by`, `created_at`) VALUES
(2, 2, 'Senior BI Engineer', 'Bijon', 'Dhaka', 'mdbijon@gmail.com', '01915728982', '7 Yrs 5 Months', 'MSC', 'Soft Dev.', '5000', '/backend/files/JnT9wFEZM8JeK1gLjq4X.doc', '2023-08-29', '', 8, 1, '2023-08-29 10:44:24'),
(3, 2, 'Senior BI Engineer', 'Kabir', 'Dhaka', 'kabir@gmail.com', '01915728983', '10 Yrs', 'MSC', 'TEST', '1050', '/backend/files/mURkiEiAo1NR9wFEJ2No.pdf', '2023-08-29', '', 2, 1, '2023-08-29 10:45:32'),
(4, 2, 'Senior BI Engineer', 'Jannat', 'DHK', 'jannat@gmail.com', '01915728984', '10 Yrs', 'TEST', 'Computer', '50000', '/backend/files/FHSfhhsLtpUDx5w1yGaX.doc', '2023-08-29', NULL, 8, NULL, '2023-08-29 10:46:47'),
(5, 1, 'Software Engineer', 'Kabir ahmed', 'DHK', 'karim@gmail.com', '01915728985', '10 Yrs', 'TEST', 'DK', '50000', '/backend/files/BEMMoAGUMb0lFvg49YPF.pdf', '2023-08-29', NULL, NULL, NULL, '2023-08-29 11:07:25');

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `entry_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`id`, `name`, `status`, `created_at`, `updated_at`, `entry_by`) VALUES
(1, 'size', 1, '2023-10-14 10:28:05', '2023-10-14 16:28:05', 1),
(2, 'color', 1, '2023-10-14 10:30:19', '2023-10-14 16:30:19', 1),
(3, 'capacity', 1, '2023-10-14 10:30:43', '2023-10-14 16:30:43', 1),
(4, 'sleeve length', 1, '2023-10-14 10:31:01', '2023-10-14 16:31:01', 1),
(5, 'neckline', 1, '2023-10-14 10:31:23', '2023-10-14 16:31:23', 1),
(6, 'closure type', 1, '2023-10-14 10:31:45', '2023-10-14 16:31:45', 1),
(7, 'material', 1, '2023-10-14 10:32:02', '2023-10-14 16:32:02', 1),
(8, 'brand', 1, '2023-10-14 10:32:29', '2023-10-14 16:32:29', 1),
(9, 'weight', 1, '2023-10-14 10:32:52', '2023-10-14 16:32:52', 1),
(10, 'gender', 1, '2023-10-14 10:33:05', '2023-10-14 16:33:05', 1),
(11, 'style', 1, '2023-10-14 10:33:25', '2023-10-14 16:33:25', 1),
(12, 'pattern', 1, '2023-10-14 10:33:42', '2023-10-14 16:33:42', 1),
(13, 'fit', 1, '2023-10-14 10:33:58', '2023-10-14 16:33:58', 1),
(14, 'type', 1, '2023-10-14 10:34:14', '2023-10-14 16:34:14', 1),
(15, 'occasion', 1, '2023-10-14 10:34:27', '2023-10-14 16:34:27', 1),
(16, 'season', 1, '2023-10-14 10:34:40', '2023-10-14 16:34:40', 1),
(17, 'features', 1, '2023-10-14 10:34:56', '2023-10-14 16:34:56', 1),
(18, 'compatibility', 1, '2023-10-14 10:35:12', '2023-10-14 16:35:12', 1),
(19, 'resolution', 1, '2023-10-14 10:35:43', '2023-10-14 16:35:43', 1),
(20, 'warranty', 1, '2023-10-14 10:35:58', '2023-10-14 16:35:58', 1);

-- --------------------------------------------------------

--
-- Table structure for table `attributes_values`
--

CREATE TABLE `attributes_values` (
  `id` int(11) NOT NULL,
  `attributes_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attributes_values`
--

INSERT INTO `attributes_values` (`id`, `attributes_id`, `name`, `status`, `entry_by`, `created_at`, `updated_at`) VALUES
(1, 1, 'S', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(2, 1, 'M', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(3, 1, 'L', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(4, 1, 'XL', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(5, 1, 'XXL', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(6, 1, 'XXXL', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(7, 1, '3XL', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(8, 1, '1', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(9, 1, '2', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(10, 1, '3', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(11, 1, '4', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(12, 1, '5', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(13, 1, '6', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(14, 1, '10', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(15, 1, '11', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(16, 1, '12', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(17, 1, '13', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(18, 1, '16', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(19, 1, '17', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(20, 1, '18', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(21, 1, '19', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(22, 1, '20', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(23, 1, '21', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(24, 1, '25', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(25, 1, '30', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(26, 1, '45', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(27, 1, '60', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(28, 1, '54', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(29, 1, '28', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(30, 1, '230', 1, 1, '2023-10-14 16:28:05', '2023-10-14 16:28:05'),
(31, 2, 'Green', 1, 1, '2023-10-14 16:30:19', '2023-10-14 16:30:19'),
(32, 2, 'Blue', 1, 1, '2023-10-14 16:30:19', '2023-10-14 16:30:19'),
(33, 2, 'Yellow', 1, 1, '2023-10-14 16:30:19', '2023-10-14 16:30:19'),
(34, 2, 'Red', 1, 1, '2023-10-14 16:30:19', '2023-10-14 16:30:19'),
(35, 2, 'Dark', 1, 1, '2023-10-14 16:30:19', '2023-10-14 16:30:19'),
(36, 2, 'White', 1, 1, '2023-10-14 16:30:19', '2023-10-14 16:30:19'),
(37, 2, 'Neviblue', 1, 1, '2023-10-14 16:30:19', '2023-10-14 16:30:19'),
(38, 2, 'Darkness', 1, 1, '2023-10-14 16:30:19', '2023-10-14 16:30:19'),
(39, 2, 'Whiteness', 1, 1, '2023-10-14 16:30:19', '2023-10-14 16:30:19'),
(40, 3, '1GB', 1, 1, '2023-10-14 16:30:43', '2023-10-14 16:30:43'),
(41, 3, '2GB', 1, 1, '2023-10-14 16:30:43', '2023-10-14 16:30:43'),
(42, 3, '3GB', 1, 1, '2023-10-14 16:30:43', '2023-10-14 16:30:43'),
(43, 3, '5GB', 1, 1, '2023-10-14 16:30:43', '2023-10-14 16:30:43'),
(44, 3, '6GB', 1, 1, '2023-10-14 16:30:43', '2023-10-14 16:30:43'),
(45, 3, '7GB', 1, 1, '2023-10-14 16:30:43', '2023-10-14 16:30:43'),
(46, 3, '1TB', 1, 1, '2023-10-14 16:30:43', '2023-10-14 16:30:43'),
(47, 3, '2TB', 1, 1, '2023-10-14 16:30:43', '2023-10-14 16:30:43'),
(48, 3, '3TB', 1, 1, '2023-10-14 16:30:43', '2023-10-14 16:30:43'),
(49, 4, 'Short Sleeve', 1, 1, '2023-10-14 16:31:01', '2023-10-14 16:31:01'),
(50, 4, 'Long Sleeve', 1, 1, '2023-10-14 16:31:01', '2023-10-14 16:31:01'),
(51, 4, 'Sleeveless', 1, 1, '2023-10-14 16:31:01', '2023-10-14 16:31:01'),
(52, 5, 'Round Neck', 1, 1, '2023-10-14 16:31:23', '2023-10-14 16:31:23'),
(53, 5, 'V-neck', 1, 1, '2023-10-14 16:31:23', '2023-10-14 16:31:23'),
(54, 5, 'Scoop Neck', 1, 1, '2023-10-14 16:31:23', '2023-10-14 16:31:23'),
(55, 6, 'Zipper', 1, 1, '2023-10-14 16:31:45', '2023-10-14 16:31:45'),
(56, 6, 'Button', 1, 1, '2023-10-14 16:31:45', '2023-10-14 16:31:45'),
(57, 6, 'Velcro', 1, 1, '2023-10-14 16:31:45', '2023-10-14 16:31:45'),
(58, 7, 'Cotton', 1, 1, '2023-10-14 16:32:02', '2023-10-14 16:32:02'),
(59, 7, 'Leather', 1, 1, '2023-10-14 16:32:02', '2023-10-14 16:32:02'),
(60, 7, 'Metal', 1, 1, '2023-10-14 16:32:02', '2023-10-14 16:32:02'),
(61, 8, 'Nike', 1, 1, '2023-10-14 16:32:29', '2023-10-14 16:32:29'),
(62, 8, 'Apple', 1, 1, '2023-10-14 16:32:29', '2023-10-14 16:32:29'),
(63, 8, 'Sony', 1, 1, '2023-10-14 16:32:29', '2023-10-14 16:32:29'),
(64, 9, 'Light', 1, 1, '2023-10-14 16:32:52', '2023-10-14 16:32:52'),
(65, 9, 'Medium', 1, 1, '2023-10-14 16:32:52', '2023-10-14 16:32:52'),
(66, 9, 'Heavy', 1, 1, '2023-10-14 16:32:52', '2023-10-14 16:32:52'),
(67, 10, 'Male', 1, 1, '2023-10-14 16:33:05', '2023-10-14 16:33:05'),
(68, 10, 'Female', 1, 1, '2023-10-14 16:33:05', '2023-10-14 16:33:05'),
(69, 10, 'Unisex', 1, 1, '2023-10-14 16:33:05', '2023-10-14 16:33:05'),
(70, 11, 'Casual', 1, 1, '2023-10-14 16:33:25', '2023-10-14 16:33:25'),
(71, 11, ' Formal', 1, 1, '2023-10-14 16:33:25', '2023-10-14 16:33:25'),
(72, 11, ' Sporty', 1, 1, '2023-10-14 16:33:25', '2023-10-14 16:33:25'),
(73, 12, 'Striped', 1, 1, '2023-10-14 16:33:42', '2023-10-14 16:33:42'),
(74, 12, 'Polka Dot', 1, 1, '2023-10-14 16:33:42', '2023-10-14 16:33:42'),
(75, 12, 'Solid', 1, 1, '2023-10-14 16:33:42', '2023-10-14 16:33:42'),
(76, 13, 'Slim Fit', 1, 1, '2023-10-14 16:33:58', '2023-10-14 16:33:58'),
(77, 13, 'Loose Fit', 1, 1, '2023-10-14 16:33:58', '2023-10-14 16:33:58'),
(78, 13, 'Regular Fit', 1, 1, '2023-10-14 16:33:58', '2023-10-14 16:33:58'),
(79, 14, 'Shirt', 1, 1, '2023-10-14 16:34:14', '2023-10-14 16:34:14'),
(80, 14, 'Pants', 1, 1, '2023-10-14 16:34:14', '2023-10-14 16:34:14'),
(81, 14, 'Shoes', 1, 1, '2023-10-14 16:34:14', '2023-10-14 16:34:14'),
(82, 15, 'Party', 1, 1, '2023-10-14 16:34:27', '2023-10-14 16:34:27'),
(83, 15, 'Wedding', 1, 1, '2023-10-14 16:34:27', '2023-10-14 16:34:27'),
(84, 15, 'Casual', 1, 1, '2023-10-14 16:34:27', '2023-10-14 16:34:27'),
(85, 16, 'Spring', 1, 1, '2023-10-14 16:34:40', '2023-10-14 16:34:40'),
(86, 16, 'Summer', 1, 1, '2023-10-14 16:34:40', '2023-10-14 16:34:40'),
(87, 16, 'Fall', 1, 1, '2023-10-14 16:34:40', '2023-10-14 16:34:40'),
(88, 16, 'Winter', 1, 1, '2023-10-14 16:34:40', '2023-10-14 16:34:40'),
(89, 17, 'Waterproof', 1, 1, '2023-10-14 16:34:56', '2023-10-14 16:34:56'),
(90, 17, 'UV Protection', 1, 1, '2023-10-14 16:34:56', '2023-10-14 16:34:56'),
(91, 17, 'Breathable', 1, 1, '2023-10-14 16:34:56', '2023-10-14 16:34:56'),
(92, 18, 'iOS', 1, 1, '2023-10-14 16:35:12', '2023-10-14 16:35:12'),
(93, 18, 'Android', 1, 1, '2023-10-14 16:35:12', '2023-10-14 16:35:12'),
(94, 18, 'Windows', 1, 1, '2023-10-14 16:35:12', '2023-10-14 16:35:12'),
(95, 3, '16GB', 1, 1, '2023-10-14 16:35:29', '2023-10-14 16:35:29'),
(96, 3, '32GB', 1, 1, '2023-10-14 16:35:29', '2023-10-14 16:35:29'),
(97, 3, '64GB', 1, 1, '2023-10-14 16:35:29', '2023-10-14 16:35:29'),
(98, 19, '720p', 1, 1, '2023-10-14 16:35:43', '2023-10-14 16:35:43'),
(99, 19, '1080p', 1, 1, '2023-10-14 16:35:43', '2023-10-14 16:35:43'),
(100, 19, '4K', 1, 1, '2023-10-14 16:35:43', '2023-10-14 16:35:43'),
(101, 20, '1 Year', 1, 1, '2023-10-14 16:35:58', '2023-10-14 16:35:58'),
(102, 20, '2 Years', 1, 1, '2023-10-14 16:35:58', '2023-10-14 16:35:58'),
(103, 20, 'Lifetime', 1, 1, '2023-10-14 16:35:58', '2023-10-14 16:35:58');

-- --------------------------------------------------------

--
-- Table structure for table `bank_master`
--

CREATE TABLE `bank_master` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bank_master`
--

INSERT INTO `bank_master` (`id`, `name`, `status`, `entry_by`) VALUES
(1, 'HSBC BANK', 1, 1),
(2, 'BARCLAYS BANK', 1, 1),
(3, 'SANTANDER BANK', 1, 1),
(4, 'HALIFAX BANK', 1, 1),
(5, 'NATWEST BANK', 1, 1),
(6, 'LLOYDS BANK', 1, 1),
(7, 'TSB BANK', 1, 1),
(8, 'TESCO BANK', 1, 1),
(9, 'CO-OPERATIVE BANK', 1, 1),
(10, 'BANK OF SCOTLAND', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bank_short_code`
--

CREATE TABLE `bank_short_code` (
  `id` int(11) NOT NULL,
  `bank_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bank_short_code`
--

INSERT INTO `bank_short_code` (`id`, `bank_id`, `name`, `status`, `entry_by`) VALUES
(1, 9, '56854', 1, 1),
(2, 2, '11545', 1, 1),
(3, 2, '165586', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `categorys`
--

CREATE TABLE `categorys` (
  `id` bigint(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `file` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `mobile_view_class` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `slug`, `description`, `meta_title`, `meta_description`, `meta_keyword`, `parent_id`, `sort_order`, `file`, `status`, `mobile_view_class`, `keyword`, `created_at`, `updated_at`) VALUES
(1, 'Super market', 'super-market', '<p><span style=\"background-color:rgb(255,255,255);color:rgb(32,33,36);\">Super market</span></p>', 'Super market', 'Super market', 'Super market', 0, 0, '/backend/files/cjOonOOtEU12wefefuVL.png', 1, NULL, NULL, '2023-10-06 02:52:08', '2023-10-06 02:52:08'),
(2, 'Food Cupboard', 'food-cupboard', '<p>Food Cupboard</p>', 'Food Cupboard', 'Food Cupboard', 'Food Cupboard', 1, 0, '', 1, NULL, NULL, '2023-10-06 02:52:43', '2023-10-06 02:52:43'),
(3, 'Gains & Rice', 'gains-rice', '<p>Gains &amp; Rice</p>', 'Gains & Rice', 'Gains & Rice', 'Gains & Rice', 2, 0, '', 1, NULL, NULL, '2023-10-06 02:53:15', '2023-10-06 02:53:15'),
(4, 'Pasta And Noodles', 'pasta-and-noodles', '<p>Pasta And Noodles</p>', 'Pasta And Noodles', 'Pasta And Noodles', 'Pasta And Noodles', 2, 0, '', 1, NULL, NULL, '2023-10-06 02:54:39', '2023-10-06 02:54:39'),
(27, 'Breverages', 'breverages', NULL, NULL, NULL, NULL, 1, 0, '', 1, NULL, NULL, '2023-10-06 03:59:26', '2023-10-06 03:59:26'),
(28, 'Soft Drink', 'soft-drink', NULL, NULL, NULL, NULL, 27, 0, '', 1, NULL, NULL, '2023-10-06 03:59:42', '2023-10-06 03:59:42'),
(29, 'Milk & Cream', 'milk-cream', NULL, NULL, NULL, NULL, 27, 0, '', 1, NULL, NULL, '2023-10-06 03:59:59', '2023-10-06 03:59:59'),
(30, 'Energy Drink', 'energy-drink', NULL, NULL, NULL, NULL, 27, 0, '', 1, NULL, NULL, '2023-10-06 04:00:14', '2023-10-06 04:00:14'),
(31, 'Bottoled Breverages', 'bottoled-breverages', NULL, NULL, NULL, NULL, 27, 0, '', 1, NULL, NULL, '2023-10-06 04:00:27', '2023-10-06 04:00:27'),
(32, 'Health & Beauty', 'health-beauty', NULL, NULL, NULL, NULL, 0, 0, '/backend/files/e1h2Hs7zY1uJxBASDoDX.png', 1, NULL, NULL, '2023-10-06 04:01:07', '2023-10-06 04:01:07'),
(33, 'Fragrances', 'fragrances', NULL, NULL, NULL, NULL, 32, 0, '', 1, NULL, NULL, '2023-10-06 04:02:35', '2023-10-06 04:02:35'),
(34, 'Women\'s', 'women-s', NULL, NULL, NULL, NULL, 33, 0, '', 1, NULL, NULL, '2023-10-06 04:02:54', '2023-10-06 04:02:54'),
(35, 'Men\'s', 'men-s', NULL, NULL, NULL, NULL, 33, 0, '', 1, NULL, NULL, '2023-10-06 04:03:07', '2023-10-06 04:03:07'),
(36, 'Breakfast Foods', 'breakfast-foods', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:20:00', '2023-10-06 04:20:00'),
(37, 'Herbs, Spices & Seasoning', 'herbs-spices-seasoning', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:20:16', '2023-10-06 04:20:16'),
(38, 'Flours & Meals', 'flours-meals', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:20:28', '2023-10-06 04:20:28'),
(39, 'Malt Drinks', 'malt-drinks', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:20:40', '2023-10-06 04:20:40'),
(40, 'Coffee', 'coffee', NULL, 'null', 'null', 'null', 2, 0, '', 1, 'null', 'null', '2023-10-06 04:20:53', '2023-10-06 05:22:00'),
(41, 'Water', 'water', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:21:07', '2023-10-06 04:21:07'),
(42, 'Cooking Oil', 'cooking-oil', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:21:20', '2023-10-06 04:21:20'),
(43, 'Juices', 'juices', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:21:30', '2023-10-06 04:21:30'),
(44, 'Soft Drinks', 'soft-drinks', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:21:49', '2023-10-06 04:21:49'),
(45, 'Canned & Packaged Foods', 'canned-packaged-foods', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:22:03', '2023-10-06 04:22:03'),
(46, 'Candy & Chocolate', 'candy-chocolate', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:22:35', '2023-10-06 04:22:35'),
(47, 'Syrups, Sugars & Sweeteners', 'syrups-sugars-sweeteners', NULL, NULL, NULL, NULL, 2, 0, '', 1, NULL, NULL, '2023-10-06 04:22:47', '2023-10-06 04:22:47'),
(48, 'Household Cleaning', 'household-cleaning', NULL, NULL, NULL, NULL, 1, 0, '', 1, NULL, NULL, '2023-10-06 04:23:26', '2023-10-06 04:23:26'),
(49, 'Laundry', 'laundry', NULL, NULL, NULL, NULL, 48, 0, '', 1, NULL, NULL, '2023-10-06 04:24:23', '2023-10-06 04:24:23'),
(50, 'Air Freshners', 'air-freshners', NULL, NULL, NULL, NULL, 48, 0, '', 1, NULL, NULL, '2023-10-06 04:24:40', '2023-10-06 04:24:40'),
(51, 'Toilet Paper & Wipes', 'toilet-paper-wipes', NULL, NULL, NULL, NULL, 48, 0, '', 1, NULL, NULL, '2023-10-06 04:24:59', '2023-10-06 04:24:59'),
(52, 'Bathroom Cleaners', 'bathroom-cleaners', NULL, NULL, NULL, NULL, 48, 0, '', 1, NULL, NULL, '2023-10-06 04:26:35', '2023-10-06 04:26:35'),
(53, 'DishWashing', 'dishwashing', NULL, NULL, NULL, NULL, 48, 0, '', 1, NULL, NULL, '2023-10-06 04:26:48', '2023-10-06 04:26:48'),
(54, 'Cleaning Tools', 'cleaning-tools', NULL, NULL, NULL, NULL, 48, 0, '', 1, NULL, NULL, '2023-10-06 04:27:01', '2023-10-06 04:27:01'),
(55, 'Bear, wine & spirits', 'bear-wine-spirits', NULL, NULL, NULL, NULL, 1, 0, '', 1, NULL, NULL, '2023-10-06 04:27:43', '2023-10-06 04:27:43'),
(56, 'Beers', 'beers', NULL, NULL, NULL, NULL, 55, 0, '', 1, NULL, NULL, '2023-10-06 04:28:06', '2023-10-06 04:28:06'),
(57, 'Vodka', 'vodka', NULL, NULL, NULL, NULL, 55, 0, '', 1, NULL, NULL, '2023-10-06 04:28:21', '2023-10-06 04:28:21'),
(58, 'Redwine', 'redwine', NULL, NULL, NULL, NULL, 55, 0, '', 1, NULL, NULL, '2023-10-06 04:28:31', '2023-10-06 04:28:31'),
(59, 'Baby Products', 'baby-products', NULL, NULL, NULL, NULL, 1, 0, '', 1, NULL, NULL, '2023-10-06 04:29:16', '2023-10-06 04:29:16'),
(60, 'Disposable Biapers', 'disposable-biapers', NULL, NULL, NULL, NULL, 59, 0, '', 1, NULL, NULL, '2023-10-06 04:29:34', '2023-10-06 04:29:34'),
(61, 'Bottle Feeding', 'bottle-feeding', NULL, NULL, NULL, NULL, 59, 0, '', 1, NULL, NULL, '2023-10-06 04:29:45', '2023-10-06 04:29:45'),
(62, 'Wioes & Refukks', 'wioes-refukks', NULL, NULL, NULL, NULL, 59, 0, '', 1, NULL, NULL, '2023-10-06 04:29:54', '2023-10-06 04:29:54'),
(63, 'Make Up', 'make-up', NULL, NULL, NULL, NULL, 32, 0, '', 1, NULL, NULL, '2023-10-06 04:41:50', '2023-10-06 04:41:50'),
(64, 'Concealers & Color Correctors', 'concealers-color-correctors', NULL, NULL, NULL, NULL, 63, 0, '', 1, NULL, NULL, '2023-10-06 04:42:19', '2023-10-06 04:42:19'),
(65, 'Foundation', 'foundation', NULL, NULL, NULL, NULL, 63, 0, '', 1, NULL, NULL, '2023-10-06 04:42:31', '2023-10-06 04:42:31'),
(66, 'Powder', 'powder', NULL, NULL, NULL, NULL, 63, 0, '', 1, NULL, NULL, '2023-10-06 04:42:43', '2023-10-06 04:42:43'),
(67, 'Lipstick', 'lipstick', NULL, NULL, NULL, NULL, 63, 0, '', 1, NULL, NULL, '2023-10-06 04:42:53', '2023-10-06 04:42:53'),
(68, 'Eyeliner & Kajal', 'eyeliner-kajal', NULL, NULL, NULL, NULL, 63, 0, '', 1, NULL, NULL, '2023-10-06 04:43:04', '2023-10-06 04:43:04'),
(69, 'Mascara', 'mascara', NULL, NULL, NULL, NULL, 63, 0, '', 1, NULL, NULL, '2023-10-06 04:43:15', '2023-10-06 04:43:15'),
(70, 'Mascar1', 'mascara----1', NULL, NULL, NULL, NULL, 69, 0, '', 1, NULL, NULL, '2023-10-07 17:42:59', '2023-10-07 17:43:18'),
(71, 'Mascara-2', 'mascara2', NULL, NULL, NULL, NULL, 69, 0, '', 1, NULL, NULL, '2023-10-07 17:43:54', '2023-10-07 17:43:54'),
(72, 'Mascara-3', 'mascara-3', NULL, NULL, NULL, NULL, 69, 0, '', 1, NULL, NULL, '2023-10-07 18:52:36', '2023-10-07 18:52:36'),
(73, 'Mascara-45', 'mascara-45', NULL, NULL, NULL, NULL, 72, 0, '', 1, NULL, NULL, '2023-10-07 18:53:41', '2023-10-07 18:53:41'),
(74, 'Mascara-450', 'mascara-450', NULL, NULL, NULL, NULL, 73, 0, '', 1, NULL, NULL, '2023-10-07 18:54:47', '2023-10-07 18:54:47');

-- --------------------------------------------------------

--
-- Table structure for table `circumstances`
--

CREATE TABLE `circumstances` (
  `id` int(11) NOT NULL,
  `employe_id` int(11) DEFAULT NULL,
  `designation_id` int(11) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `gender` varchar(225) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `salary` double(10,2) DEFAULT NULL,
  `phone` varchar(225) DEFAULT NULL,
  `joning_date` date DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `image` varchar(225) DEFAULT NULL,
  `type_of_doc` text DEFAULT NULL,
  `passport_upload_docs` text DEFAULT NULL,
  `visa_upload_documents` text DEFAULT NULL,
  `euss_upload_documents` text DEFAULT NULL,
  `nid_upload_documents` text DEFAULT NULL,
  `other_upload_documents` text DEFAULT NULL,
  `employee_code` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `ni_no` varchar(255) DEFAULT NULL,
  `marital_status` varchar(255) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `employee_type` varchar(255) DEFAULT NULL,
  `date_of_confirmation` date DEFAULT NULL,
  `contact_start_date` date DEFAULT NULL,
  `contact_end_date` date DEFAULT NULL,
  `job_location` varchar(255) DEFAULT NULL,
  `reporting_authority` varchar(255) DEFAULT NULL,
  `leave_sanction_auth` varchar(255) DEFAULT NULL,
  `education_details` text DEFAULT NULL,
  `job_details` text DEFAULT NULL,
  `key_respons` text DEFAULT NULL,
  `training_details` varchar(255) DEFAULT NULL,
  `emger_contact_name` varchar(255) DEFAULT NULL,
  `emger_email` varchar(255) DEFAULT NULL,
  `emger_contact_no` varchar(255) DEFAULT NULL,
  `emger_address` varchar(255) DEFAULT NULL,
  `certifi_title` varchar(255) DEFAULT NULL,
  `certifi_license_number` varchar(255) DEFAULT NULL,
  `certifi_start_date` date DEFAULT NULL,
  `certifi_end_date` date DEFAULT NULL,
  `contact_info_post_code` varchar(255) DEFAULT NULL,
  `contact_info_address` varchar(255) DEFAULT NULL,
  `contact_info_address_1` varchar(255) DEFAULT NULL,
  `contact_info_address_2` varchar(255) DEFAULT NULL,
  `contact_info_address_3` varchar(255) DEFAULT NULL,
  `contact_info_city_country` varchar(255) DEFAULT NULL,
  `contact_info_country_id` varchar(255) DEFAULT NULL,
  `pass_no` varchar(255) DEFAULT NULL,
  `pass_nationality` varchar(255) DEFAULT NULL,
  `pass_place_birth` varchar(255) DEFAULT NULL,
  `pass_issued_by` varchar(255) DEFAULT NULL,
  `pass_date` date DEFAULT NULL,
  `pass_expire_date` date DEFAULT NULL,
  `pass_review_date` date DEFAULT NULL,
  `visa_brp_np` varchar(255) DEFAULT NULL,
  `visa_nationality` varchar(255) DEFAULT NULL,
  `visa_country_residence` varchar(255) DEFAULT NULL,
  `visa_issuedby` varchar(255) DEFAULT NULL,
  `visa_issued_date` date DEFAULT NULL,
  `visa_expire_date` date DEFAULT NULL,
  `visa_eligbible_review_date` date DEFAULT NULL,
  `visa_current_yesno` varchar(255) DEFAULT NULL,
  `visa_remarks` text DEFAULT NULL,
  `ess_ref_no` varchar(255) DEFAULT NULL,
  `ess_nationality` varchar(255) DEFAULT NULL,
  `ess_issued_by` varchar(255) DEFAULT NULL,
  `ess_issued_date` date DEFAULT NULL,
  `ess_expire_date` date DEFAULT NULL,
  `ess_eligible_review_date` date DEFAULT NULL,
  `ess_current_visa` varchar(255) DEFAULT NULL,
  `ess_remarks` varchar(255) DEFAULT NULL,
  `nid_number` text DEFAULT NULL,
  `nid_nationality` varchar(255) DEFAULT NULL,
  `nid_country_residence` varchar(255) DEFAULT NULL,
  `nid_issue_date` date DEFAULT NULL,
  `nid_expire_date` date DEFAULT NULL,
  `nid_eli_review_date` date DEFAULT NULL,
  `nid_current_visa` varchar(255) DEFAULT NULL,
  `nid_remarks` varchar(255) DEFAULT NULL,
  `others_doc_name` varchar(255) DEFAULT NULL,
  `others_ref_name` varchar(255) DEFAULT NULL,
  `others_nationality` varchar(255) DEFAULT NULL,
  `others_issue_date` date DEFAULT NULL,
  `others_expire_date` date DEFAULT NULL,
  `others_eligb_review_date` date DEFAULT NULL,
  `others_visa_sts` varchar(255) DEFAULT NULL,
  `others_remarks` varchar(255) DEFAULT NULL,
  `pay_group` varchar(255) DEFAULT NULL,
  `pay_annual_pay` varchar(255) DEFAULT NULL,
  `pay_wedges_pay_mode` varchar(255) DEFAULT NULL,
  `pay_payment_type` varchar(255) DEFAULT NULL,
  `pay_basic_daily_wedges` varchar(255) DEFAULT NULL,
  `pay_min_working_hour` varchar(255) DEFAULT NULL,
  `pay_tax_code` varchar(255) DEFAULT NULL,
  `pay_tax_ref` varchar(200) DEFAULT NULL,
  `pay_percentage` varchar(200) DEFAULT NULL,
  `pay_payment_mode` varchar(200) DEFAULT NULL,
  `pay_bank_name` varchar(200) DEFAULT NULL,
  `pay_branch_name` varchar(200) DEFAULT NULL,
  `pay_account_no` text DEFAULT NULL,
  `pay_sort_code` text DEFAULT NULL,
  `pay_remarks` text DEFAULT NULL,
  `payment_da` text DEFAULT NULL,
  `payment_hra` text DEFAULT NULL,
  `payment_conven_ta` text DEFAULT NULL,
  `payment_perfomance` text DEFAULT NULL,
  `payment_monthly_al` text DEFAULT NULL,
  `ni_dedu_da` text DEFAULT NULL,
  `ni_dedu_hra` text DEFAULT NULL,
  `ni_dedu_conven_ta` text DEFAULT NULL,
  `ni_dedu_perfomance` text DEFAULT NULL,
  `ni_dedu_monthly_al` text DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `circumstances`
--

INSERT INTO `circumstances` (`id`, `employe_id`, `designation_id`, `department_id`, `name`, `email`, `age`, `gender`, `address`, `salary`, `phone`, `joning_date`, `date_of_birth`, `image`, `type_of_doc`, `passport_upload_docs`, `visa_upload_documents`, `euss_upload_documents`, `nid_upload_documents`, `other_upload_documents`, `employee_code`, `first_name`, `middle_name`, `last_name`, `ni_no`, `marital_status`, `country_id`, `employee_type`, `date_of_confirmation`, `contact_start_date`, `contact_end_date`, `job_location`, `reporting_authority`, `leave_sanction_auth`, `education_details`, `job_details`, `key_respons`, `training_details`, `emger_contact_name`, `emger_email`, `emger_contact_no`, `emger_address`, `certifi_title`, `certifi_license_number`, `certifi_start_date`, `certifi_end_date`, `contact_info_post_code`, `contact_info_address`, `contact_info_address_1`, `contact_info_address_2`, `contact_info_address_3`, `contact_info_city_country`, `contact_info_country_id`, `pass_no`, `pass_nationality`, `pass_place_birth`, `pass_issued_by`, `pass_date`, `pass_expire_date`, `pass_review_date`, `visa_brp_np`, `visa_nationality`, `visa_country_residence`, `visa_issuedby`, `visa_issued_date`, `visa_expire_date`, `visa_eligbible_review_date`, `visa_current_yesno`, `visa_remarks`, `ess_ref_no`, `ess_nationality`, `ess_issued_by`, `ess_issued_date`, `ess_expire_date`, `ess_eligible_review_date`, `ess_current_visa`, `ess_remarks`, `nid_number`, `nid_nationality`, `nid_country_residence`, `nid_issue_date`, `nid_expire_date`, `nid_eli_review_date`, `nid_current_visa`, `nid_remarks`, `others_doc_name`, `others_ref_name`, `others_nationality`, `others_issue_date`, `others_expire_date`, `others_eligb_review_date`, `others_visa_sts`, `others_remarks`, `pay_group`, `pay_annual_pay`, `pay_wedges_pay_mode`, `pay_payment_type`, `pay_basic_daily_wedges`, `pay_min_working_hour`, `pay_tax_code`, `pay_tax_ref`, `pay_percentage`, `pay_payment_mode`, `pay_bank_name`, `pay_branch_name`, `pay_account_no`, `pay_sort_code`, `pay_remarks`, `payment_da`, `payment_hra`, `payment_conven_ta`, `payment_perfomance`, `payment_monthly_al`, `ni_dedu_da`, `ni_dedu_hra`, `ni_dedu_conven_ta`, `ni_dedu_perfomance`, `ni_dedu_monthly_al`, `entry_by`, `created_at`, `status`) VALUES
(1, 6, 7, 6, 'Mrs. Jan Ahmed', 'OnlinessSit2221@gmail.com', 'eed', '1', 'fsdfsdf', 34234234.00, '324234', '2023-08-30', '2023-08-16', '/backend/files/I0ZYJ7wmwlVnZ1ZEe6Z9.jpg', '/backend/files/3iJXaelLRTTkIHBlVNq2.jpg', '/backend/files/sWe1DbkAU7lBaLTLQq57.jpg', '/backend/files/3Gqsx9Qm9HWakp3GoJDE.jpg', '/backend/files/kJDdkiRXW3igzULbs1RZ.jpg', NULL, '/backend/files/qQRq3ozkjgiEnkX2pTnl.jpg', 'EMP-006', 'Mrs.', 'Jan', 'Ahmed', 'sdfsdf', 'Widow', 10, 'FULL TIME', '2023-08-17', '2023-08-10', '2023-08-17', 'sdfs', '', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 's@gmail.com', 's', 'sdf', 'sfs', 'sdf', '2023-08-21', '2023-08-27', 'asdd', 'fsdf', 'sdf', 'sdf', 'sdfsdf', '2023-08-17', '2', 'dgdfg', '3', '2023-08-24', '3245', '0000-00-00', '0000-00-00', '0000-00-00', 'sdf', '3', '4', 'sdfsdf', '2023-08-17', '2023-08-18', '2023-08-17', '', '', 'sdfs', '6', '234234', '2023-08-21', '2023-08-24', '2023-08-25', 'No', '', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', '', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 1, '2023-08-15 23:22:16', 1),
(2, 5, 3, 4, 'Mr. Bijon Ahmed', 'onlinesoft@gmail.com', '33f1111', '1', 'fgfdgf1111', 330000.00, 'sdff1111', '2023-08-10', '2023-08-24', '/backend/files/yLueQNQHCDh4PEdlOmzf.jpg', '/backend/files/mK9pawBkTAUCnlnLLVZ8.jpg', '/backend/files/qtjiMkUrXLvCpHnPXfot.jpg', '/backend/files/ackvh94E74xeWVcqbHPt.jpg', '/backend/files/aGTivb3cUepDtHEyj9dm.jpg', '/backend/files/08gLujAFSq6VKfQTbuKi.jpg', NULL, 'EMP-005', 'Mr.', 'Bijon', 'Ahmed', 'dsff1111', 'Single', 4, 'FULL TIME', '2023-08-16', '2023-08-23', '2023-08-31', 'dfgf1111', 'dfgf1111', 'dfgdfgf1111', 'dfgf1111', 'dfgf1111', 'dfgf1111', 'dfgdfgf1111', 'dfgdfgdfg111111', 'dfgdfg@gmail.comf1111', '353434f1111', 'sdfsdff1111', 'sdfsdff1111', 'sdfsdf111111', '2023-08-24', '2023-08-17', 'wewerf1111', 'werwer111111', 'dsfsdfsdf', 'dfdfdsf', 'dsfsdfsdf', '2023-08-31', '6', 'sdfsdf111111', '3', '2023-08-23', 'sdfsdf111111', '2023-08-18', '2023-08-24', '2023-08-25', 'sdf111111', '9', '5', 'sdfsdfsdf111111', '2023-08-22', '2023-08-16', '2023-08-24', 'Yes', '111111111111111111111111', 'sdfsdf11111', '11', 'sdfsdfsdf', '2023-08-31', '2023-08-16', '2023-08-25', 'Yes', 'asdasdf11111f11111f11111', '216548748', '2', '2', '2023-08-24', '2023-08-31', '2023-08-31', 'Yes', 'asdasdf11111f11111f11111', 'asd', 'sadasdasd', '2', '2023-08-17', '2023-08-23', '2023-08-23', 'Yes', 'sdfsdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'Cash', 'sdf', 'sdf', 'sdf', 'sdf', 'sdfsdf', 'true', 'true', '', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 1, '2023-08-15 23:38:09', 1),
(3, 3, 8, 4, 'Mrs. Raheem Ahmd', 'Raheem@gmail.com', '32 Yrs', '1', 'Dhaka , Bangladesh', 120000.00, '01915728982', '2023-07-07', '2023-07-21', '/backend/files/n3ZCXWhTKIWVi4TZfHto.jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'EMP-003', 'Mrs.', 'Raheem', 'Ahmd', '11122233445', 'Single', 9, 'LEFT', '0000-00-00', '0000-00-00', '0000-00-00', 'Test', 'Test', 'Test', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', '2023-08-23', '2023-08-31', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'null', '5', 'Pay Group', '4', 'null', 'Pay Group', '0000-00-00', '0000-00-00', '0000-00-00', 'Pay Group', '11', '10', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'No', 'Pay Group', 'Pay Group', '3', 'Pay Group', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'Pay Group', 'null', '', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'Pay Group', 'Pay Group', '5', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'null', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'null', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'Pay Group', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 1, '2023-08-16 14:13:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `countrycode` char(3) NOT NULL,
  `countryname` varchar(200) NOT NULL,
  `code` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `countrycode`, `countryname`, `code`) VALUES
(1, 'ABW', 'Aruba', 'AW'),
(2, 'AFG', 'Afghanistan', 'AF'),
(3, 'AGO', 'Angola', 'AO'),
(4, 'AIA', 'Anguilla', 'AI'),
(5, 'ALA', 'Åland', 'AX'),
(6, 'ALB', 'Albania', 'AL'),
(7, 'AND', 'Andorra', 'AD'),
(8, 'ARE', 'United Arab Emirates', 'AE'),
(9, 'ARG', 'Argentina', 'AR'),
(10, 'ARM', 'Armenia', 'AM'),
(11, 'ASM', 'American Samoa', 'AS'),
(12, 'ATA', 'Antarctica', 'AQ'),
(13, 'ATF', 'French Southern Territories', 'TF'),
(14, 'ATG', 'Antigua and Barbuda', 'AG'),
(15, 'AUS', 'Australia', 'AU'),
(16, 'AUT', 'Austria', 'AT'),
(17, 'AZE', 'Azerbaijan', 'AZ'),
(18, 'BDI', 'Burundi', 'BI'),
(19, 'BEL', 'Belgium', 'BE'),
(20, 'BEN', 'Benin', 'BJ'),
(21, 'BES', 'Bonaire', 'BQ'),
(22, 'BFA', 'Burkina Faso', 'BF'),
(23, 'BGD', 'Bangladesh', 'BD'),
(24, 'BGR', 'Bulgaria', 'BG'),
(25, 'BHR', 'Bahrain', 'BH'),
(26, 'BHS', 'Bahamas', 'BS'),
(27, 'BIH', 'Bosnia and Herzegovina', 'BA'),
(28, 'BLM', 'Saint Barthélemy', 'BL'),
(29, 'BLR', 'Belarus', 'BY'),
(30, 'BLZ', 'Belize', 'BZ'),
(31, 'BMU', 'Bermuda', 'BM'),
(32, 'BOL', 'Bolivia', 'BO'),
(33, 'BRA', 'Brazil', 'BR'),
(34, 'BRB', 'Barbados', 'BB'),
(35, 'BRN', 'Brunei', 'BN'),
(36, 'BTN', 'Bhutan', 'BT'),
(37, 'BVT', 'Bouvet Island', 'BV'),
(38, 'BWA', 'Botswana', 'BW'),
(39, 'CAF', 'Central African Republic', 'CF'),
(40, 'CAN', 'Canada', 'CA'),
(41, 'CCK', 'Cocos [Keeling] Islands', 'CC'),
(42, 'CHE', 'Switzerland', 'CH'),
(43, 'CHL', 'Chile', 'CL'),
(44, 'CHN', 'China', 'CN'),
(45, 'CIV', 'Ivory Coast', 'CI'),
(46, 'CMR', 'Cameroon', 'CM'),
(47, 'COD', 'Democratic Republic of the Congo', 'CD'),
(48, 'COG', 'Republic of the Congo', 'CG'),
(49, 'COK', 'Cook Islands', 'CK'),
(50, 'COL', 'Colombia', 'CO'),
(51, 'COM', 'Comoros', 'KM'),
(52, 'CPV', 'Cape Verde', 'CV'),
(53, 'CRI', 'Costa Rica', 'CR'),
(54, 'CUB', 'Cuba', 'CU'),
(55, 'CUW', 'Curacao', 'CW'),
(56, 'CXR', 'Christmas Island', 'CX'),
(57, 'CYM', 'Cayman Islands', 'KY'),
(58, 'CYP', 'Cyprus', 'CY'),
(59, 'CZE', 'Czech Republic', 'CZ'),
(60, 'DEU', 'Germany', 'DE'),
(61, 'DJI', 'Djibouti', 'DJ'),
(62, 'DMA', 'Dominica', 'DM'),
(63, 'DNK', 'Denmark', 'DK'),
(64, 'DOM', 'Dominican Republic', 'DO'),
(65, 'DZA', 'Algeria', 'DZ'),
(66, 'ECU', 'Ecuador', 'EC'),
(67, 'EGY', 'Egypt', 'EG'),
(68, 'ERI', 'Eritrea', 'ER'),
(69, 'ESH', 'Western Sahara', 'EH'),
(70, 'ESP', 'Spain', 'ES'),
(71, 'EST', 'Estonia', 'EE'),
(72, 'ETH', 'Ethiopia', 'ET'),
(73, 'FIN', 'Finland', 'FI'),
(74, 'FJI', 'Fiji', 'FJ'),
(75, 'FLK', 'Falkland Islands', 'FK'),
(76, 'FRA', 'France', 'FR'),
(77, 'FRO', 'Faroe Islands', 'FO'),
(78, 'FSM', 'Micronesia', 'FM'),
(79, 'GAB', 'Gabon', 'GA'),
(80, 'GBR', 'United Kingdom', 'GB'),
(81, 'GEO', 'Georgia', 'GE'),
(82, 'GGY', 'Guernsey', 'GG'),
(83, 'GHA', 'Ghana', 'GH'),
(84, 'GIB', 'Gibraltar', 'GI'),
(85, 'GIN', 'Guinea', 'GN'),
(86, 'GLP', 'Guadeloupe', 'GP'),
(87, 'GMB', 'Gambia', 'GM'),
(88, 'GNB', 'Guinea-Bissau', 'GW'),
(89, 'GNQ', 'Equatorial Guinea', 'GQ'),
(90, 'GRC', 'Greece', 'GR'),
(91, 'GRD', 'Grenada', 'GD'),
(92, 'GRL', 'Greenland', 'GL'),
(93, 'GTM', 'Guatemala', 'GT'),
(94, 'GUF', 'French Guiana', 'GF'),
(95, 'GUM', 'Guam', 'GU'),
(96, 'GUY', 'Guyana', 'GY'),
(97, 'HKG', 'Hong Kong', 'HK'),
(98, 'HMD', 'Heard Island and McDonald Islands', 'HM'),
(99, 'HND', 'Honduras', 'HN'),
(100, 'HRV', 'Croatia', 'HR'),
(101, 'HTI', 'Haiti', 'HT'),
(102, 'HUN', 'Hungary', 'HU'),
(103, 'IDN', 'Indonesia', 'ID'),
(104, 'IMN', 'Isle of Man', 'IM'),
(105, 'IND', 'India', 'IN'),
(106, 'IOT', 'British Indian Ocean Territory', 'IO'),
(107, 'IRL', 'Ireland', 'IE'),
(108, 'IRN', 'Iran', 'IR'),
(109, 'IRQ', 'Iraq', 'IQ'),
(110, 'ISL', 'Iceland', 'IS'),
(111, 'ISR', 'Israel', 'IL'),
(112, 'ITA', 'Italy', 'IT'),
(113, 'JAM', 'Jamaica', 'JM'),
(114, 'JEY', 'Jersey', 'JE'),
(115, 'JOR', 'Jordan', 'JO'),
(116, 'JPN', 'Japan', 'JP'),
(117, 'KAZ', 'Kazakhstan', 'KZ'),
(118, 'KEN', 'Kenya', 'KE'),
(119, 'KGZ', 'Kyrgyzstan', 'KG'),
(120, 'KHM', 'Cambodia', 'KH'),
(121, 'KIR', 'Kiribati', 'KI'),
(122, 'KNA', 'Saint Kitts and Nevis', 'KN'),
(123, 'KOR', 'South Korea', 'KR'),
(124, 'KWT', 'Kuwait', 'KW'),
(125, 'LAO', 'Laos', 'LA'),
(126, 'LBN', 'Lebanon', 'LB'),
(127, 'LBR', 'Liberia', 'LR'),
(128, 'LBY', 'Libya', 'LY'),
(129, 'LCA', 'Saint Lucia', 'LC'),
(130, 'LIE', 'Liechtenstein', 'LI'),
(131, 'LKA', 'Sri Lanka', 'LK'),
(132, 'LSO', 'Lesotho', 'LS'),
(133, 'LTU', 'Lithuania', 'LT'),
(134, 'LUX', 'Luxembourg', 'LU'),
(135, 'LVA', 'Latvia', 'LV'),
(136, 'MAC', 'Macao', 'MO'),
(137, 'MAF', 'Saint Martin', 'MF'),
(138, 'MAR', 'Morocco', 'MA'),
(139, 'MCO', 'Monaco', 'MC'),
(140, 'MDA', 'Moldova', 'MD'),
(141, 'MDG', 'Madagascar', 'MG'),
(142, 'MDV', 'Maldives', 'MV'),
(143, 'MEX', 'Mexico', 'MX'),
(144, 'MHL', 'Marshall Islands', 'MH'),
(145, 'MKD', 'Macedonia', 'MK'),
(146, 'MLI', 'Mali', 'ML'),
(147, 'MLT', 'Malta', 'MT'),
(148, 'MMR', 'Myanmar [Burma]', 'MM'),
(149, 'MNE', 'Montenegro', 'ME'),
(150, 'MNG', 'Mongolia', 'MN'),
(151, 'MNP', 'Northern Mariana Islands', 'MP'),
(152, 'MOZ', 'Mozambique', 'MZ'),
(153, 'MRT', 'Mauritania', 'MR'),
(154, 'MSR', 'Montserrat', 'MS'),
(155, 'MTQ', 'Martinique', 'MQ'),
(156, 'MUS', 'Mauritius', 'MU'),
(157, 'MWI', 'Malawi', 'MW'),
(158, 'MYS', 'Malaysia', 'MY'),
(159, 'MYT', 'Mayotte', 'YT'),
(160, 'NAM', 'Namibia', 'NA'),
(161, 'NCL', 'New Caledonia', 'NC'),
(162, 'NER', 'Niger', 'NE'),
(163, 'NFK', 'Norfolk Island', 'NF'),
(164, 'NGA', 'Nigeria', 'NG'),
(165, 'NIC', 'Nicaragua', 'NI'),
(166, 'NIU', 'Niue', 'NU'),
(167, 'NLD', 'Netherlands', 'NL'),
(168, 'NOR', 'Norway', 'NO'),
(169, 'NPL', 'Nepal', 'NP'),
(170, 'NRU', 'Nauru', 'NR'),
(171, 'NZL', 'New Zealand', 'NZ'),
(172, 'OMN', 'Oman', 'OM'),
(173, 'PAK', 'Pakistan', 'PK'),
(174, 'PAN', 'Panama', 'PA'),
(175, 'PCN', 'Pitcairn Islands', 'PN'),
(176, 'PER', 'Peru', 'PE'),
(177, 'PHL', 'Philippines', 'PH'),
(178, 'PLW', 'Palau', 'PW'),
(179, 'PNG', 'Papua New Guinea', 'PG'),
(180, 'POL', 'Poland', 'PL'),
(181, 'PRI', 'Puerto Rico', 'PR'),
(182, 'PRK', 'North Korea', 'KP'),
(183, 'PRT', 'Portugal', 'PT'),
(184, 'PRY', 'Paraguay', 'PY'),
(185, 'PSE', 'Palestine', 'PS'),
(186, 'PYF', 'French Polynesia', 'PF'),
(187, 'QAT', 'Qatar', 'QA'),
(188, 'REU', 'Réunion', 'RE'),
(189, 'ROU', 'Romania', 'RO'),
(190, 'RUS', 'Russia', 'RU'),
(191, 'RWA', 'Rwanda', 'RW'),
(192, 'SAU', 'Saudi Arabia', 'SA'),
(193, 'SDN', 'Sudan', 'SD'),
(194, 'SEN', 'Senegal', 'SN'),
(195, 'SGP', 'Singapore', 'SG'),
(196, 'SGS', 'South Georgia and the South Sandwich Islands', 'GS'),
(197, 'SHN', 'Saint Helena', 'SH'),
(198, 'SJM', 'Svalbard and Jan Mayen', 'SJ'),
(199, 'SLB', 'Solomon Islands', 'SB'),
(200, 'SLE', 'Sierra Leone', 'SL'),
(201, 'SLV', 'El Salvador', 'SV'),
(202, 'SMR', 'San Marino', 'SM'),
(203, 'SOM', 'Somalia', 'SO'),
(204, 'SPM', 'Saint Pierre and Miquelon', 'PM'),
(205, 'SRB', 'Serbia', 'RS'),
(206, 'SSD', 'South Sudan', 'SS'),
(207, 'STP', 'São Tomé and Príncipe', 'ST'),
(208, 'SUR', 'Suriname', 'SR'),
(209, 'SVK', 'Slovakia', 'SK'),
(210, 'SVN', 'Slovenia', 'SI'),
(211, 'SWE', 'Sweden', 'SE'),
(212, 'SWZ', 'Swaziland', 'SZ'),
(213, 'SXM', 'Sint Maarten', 'SX'),
(214, 'SYC', 'Seychelles', 'SC'),
(215, 'SYR', 'Syria', 'SY'),
(216, 'TCA', 'Turks and Caicos Islands', 'TC'),
(217, 'TCD', 'Chad', 'TD'),
(218, 'TGO', 'Togo', 'TG'),
(219, 'THA', 'Thailand', 'TH'),
(220, 'TJK', 'Tajikistan', 'TJ'),
(221, 'TKL', 'Tokelau', 'TK'),
(222, 'TKM', 'Turkmenistan', 'TM'),
(223, 'TLS', 'East Timor', 'TL'),
(224, 'TON', 'Tonga', 'TO'),
(225, 'TTO', 'Trinidad and Tobago', 'TT'),
(226, 'TUN', 'Tunisia', 'TN'),
(227, 'TUR', 'Turkey', 'TR'),
(228, 'TUV', 'Tuvalu', 'TV'),
(229, 'TWN', 'Taiwan', 'TW'),
(230, 'TZA', 'Tanzania', 'TZ'),
(231, 'UGA', 'Uganda', 'UG'),
(232, 'UKR', 'Ukraine', 'UA'),
(233, 'UMI', 'U.S. Minor Outlying Islands', 'UM'),
(234, 'URY', 'Uruguay', 'UY'),
(235, 'USA', 'United States', 'US'),
(236, 'UZB', 'Uzbekistan', 'UZ'),
(237, 'VAT', 'Vatican City', 'VA'),
(238, 'VCT', 'Saint Vincent and the Grenadines', 'VC'),
(239, 'VEN', 'Venezuela', 'VE'),
(240, 'VGB', 'British Virgin Islands', 'VG'),
(241, 'VIR', 'U.S. Virgin Islands', 'VI'),
(242, 'VNM', 'Vietnam', 'VN'),
(243, 'VUT', 'Vanuatu', 'VU'),
(244, 'WLF', 'Wallis and Futuna', 'WF'),
(245, 'WSM', 'Samoa', 'WS'),
(246, 'XKX', 'Kosovo', 'XK'),
(247, 'YEM', 'Yemen', 'YE'),
(248, 'ZAF', 'South Africa', 'ZA'),
(249, 'ZMB', 'Zambia', 'ZM'),
(250, 'ZWE', 'Zimbabwe', 'ZW');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(225) DEFAULT NULL,
  `addres` varchar(255) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `name`, `status`, `entry_by`, `created_at`) VALUES
(1, 'Research and development', 1, 1, '2023-07-15 21:33:10'),
(2, 'Operations', 1, 1, '2023-07-15 21:33:24'),
(3, 'fhfghfghfgh1111', 1, 1, '2023-07-16 09:57:04'),
(4, 'Marketing and sales', 1, 1, '2023-07-16 09:57:51'),
(5, 'Human resources', 1, 1, '2023-07-16 09:57:58'),
(6, 'Customer service', 1, 1, '2023-07-16 09:58:07'),
(7, 'Accounting and finance', 1, 1, '2023-07-16 09:58:15');

-- --------------------------------------------------------

--
-- Table structure for table `designation`
--

CREATE TABLE `designation` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `designation`
--

INSERT INTO `designation` (`id`, `name`, `status`, `entry_by`, `created_at`) VALUES
(1, 'Chairman', 1, 1, '2023-07-15 21:56:25'),
(2, 'Director', 1, 1, '2023-07-15 22:01:20'),
(3, 'Managing Director', 1, 1, '2023-07-16 09:54:43'),
(4, 'Chief Executive Officer (CEO)', 1, 1, '2023-07-16 09:54:51'),
(5, 'Chief Financial Officer (CFO)', 1, 1, '2023-07-16 09:55:05'),
(6, 'Secretary', 1, 1, '2023-07-16 09:55:12'),
(7, 'Chief Operating Officer (COO)', 1, 1, '2023-07-16 09:55:23'),
(8, 'Chief Technology Officer (CTO)', 1, 1, '2023-07-16 09:55:30'),
(9, 'Vice President', 1, 1, '2023-07-16 09:55:37'),
(10, 'Manager', 1, 1, '2023-07-16 09:55:43');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `designation_id` int(11) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `gender` varchar(225) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `salary` double(10,2) DEFAULT NULL,
  `phone` varchar(225) DEFAULT NULL,
  `joning_date` date DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `image` varchar(225) DEFAULT NULL,
  `type_of_doc` text DEFAULT NULL,
  `passport_upload_docs` text DEFAULT NULL,
  `visa_upload_documents` text DEFAULT NULL,
  `euss_upload_documents` text DEFAULT NULL,
  `nid_upload_documents` text DEFAULT NULL,
  `other_upload_documents` text DEFAULT NULL,
  `employee_code` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `ni_no` varchar(255) DEFAULT NULL,
  `marital_status` varchar(255) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `employee_type` varchar(255) DEFAULT NULL,
  `date_of_confirmation` date DEFAULT NULL,
  `contact_start_date` date DEFAULT NULL,
  `contact_end_date` date DEFAULT NULL,
  `job_location` varchar(255) DEFAULT NULL,
  `reporting_authority` varchar(255) DEFAULT NULL,
  `leave_sanction_auth` varchar(255) DEFAULT NULL,
  `education_details` text DEFAULT NULL,
  `job_details` text DEFAULT NULL,
  `key_respons` text DEFAULT NULL,
  `training_details` varchar(255) DEFAULT NULL,
  `emger_contact_name` varchar(255) DEFAULT NULL,
  `emger_email` varchar(255) DEFAULT NULL,
  `emger_contact_no` varchar(255) DEFAULT NULL,
  `emger_address` varchar(255) DEFAULT NULL,
  `certifi_title` varchar(255) DEFAULT NULL,
  `certifi_license_number` varchar(255) DEFAULT NULL,
  `certifi_start_date` date DEFAULT NULL,
  `certifi_end_date` date DEFAULT NULL,
  `contact_info_post_code` varchar(255) DEFAULT NULL,
  `contact_info_address` varchar(255) DEFAULT NULL,
  `contact_info_address_1` varchar(255) DEFAULT NULL,
  `contact_info_address_2` varchar(255) DEFAULT NULL,
  `contact_info_address_3` varchar(255) DEFAULT NULL,
  `contact_info_city_country` varchar(255) DEFAULT NULL,
  `contact_info_country_id` varchar(255) DEFAULT NULL,
  `pass_no` varchar(255) DEFAULT NULL,
  `pass_nationality` varchar(255) DEFAULT NULL,
  `pass_place_birth` varchar(255) DEFAULT NULL,
  `pass_issued_by` varchar(255) DEFAULT NULL,
  `pass_date` date DEFAULT NULL,
  `pass_expire_date` date DEFAULT NULL,
  `pass_review_date` date DEFAULT NULL,
  `visa_brp_np` varchar(255) DEFAULT NULL,
  `visa_nationality` varchar(255) DEFAULT NULL,
  `visa_country_residence` varchar(255) DEFAULT NULL,
  `visa_issuedby` varchar(255) DEFAULT NULL,
  `visa_issued_date` date DEFAULT NULL,
  `visa_expire_date` date DEFAULT NULL,
  `visa_eligbible_review_date` date DEFAULT NULL,
  `visa_current_yesno` varchar(255) DEFAULT NULL,
  `visa_remarks` text DEFAULT NULL,
  `ess_ref_no` varchar(255) DEFAULT NULL,
  `ess_nationality` varchar(255) DEFAULT NULL,
  `ess_issued_by` varchar(255) DEFAULT NULL,
  `ess_issued_date` date DEFAULT NULL,
  `ess_expire_date` date DEFAULT NULL,
  `ess_eligible_review_date` date DEFAULT NULL,
  `ess_current_visa` varchar(255) DEFAULT NULL,
  `ess_remarks` varchar(255) DEFAULT NULL,
  `nid_number` text DEFAULT NULL,
  `nid_nationality` varchar(255) DEFAULT NULL,
  `nid_country_residence` varchar(255) DEFAULT NULL,
  `nid_issue_date` date DEFAULT NULL,
  `nid_expire_date` date DEFAULT NULL,
  `nid_eli_review_date` date DEFAULT NULL,
  `nid_current_visa` varchar(255) DEFAULT NULL,
  `nid_remarks` varchar(255) DEFAULT NULL,
  `others_doc_name` varchar(255) DEFAULT NULL,
  `others_ref_name` varchar(255) DEFAULT NULL,
  `others_nationality` varchar(255) DEFAULT NULL,
  `others_issue_date` date DEFAULT NULL,
  `others_expire_date` date DEFAULT NULL,
  `others_eligb_review_date` date DEFAULT NULL,
  `others_visa_sts` varchar(255) DEFAULT NULL,
  `others_remarks` varchar(255) DEFAULT NULL,
  `pay_group` varchar(255) DEFAULT NULL,
  `pay_annual_pay` varchar(255) DEFAULT NULL,
  `pay_wedges_pay_mode` varchar(255) DEFAULT NULL,
  `pay_payment_type` varchar(255) DEFAULT NULL,
  `pay_basic_daily_wedges` varchar(255) DEFAULT NULL,
  `pay_min_working_hour` varchar(255) DEFAULT NULL,
  `pay_tax_code` varchar(255) DEFAULT NULL,
  `pay_tax_ref` varchar(200) DEFAULT NULL,
  `pay_percentage` varchar(200) DEFAULT NULL,
  `pay_payment_mode` varchar(200) DEFAULT NULL,
  `pay_bank_name` varchar(200) DEFAULT NULL,
  `pay_branch_name` varchar(200) DEFAULT NULL,
  `pay_account_no` text DEFAULT NULL,
  `pay_sort_code` text DEFAULT NULL,
  `pay_remarks` text DEFAULT NULL,
  `payment_da` text DEFAULT NULL,
  `payment_hra` text DEFAULT NULL,
  `payment_conven_ta` text DEFAULT NULL,
  `payment_perfomance` text DEFAULT NULL,
  `payment_monthly_al` text DEFAULT NULL,
  `ni_dedu_da` text DEFAULT NULL,
  `ni_dedu_hra` text DEFAULT NULL,
  `ni_dedu_conven_ta` text DEFAULT NULL,
  `ni_dedu_perfomance` text DEFAULT NULL,
  `ni_dedu_monthly_al` text DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `designation_id`, `department_id`, `name`, `email`, `age`, `gender`, `address`, `salary`, `phone`, `joning_date`, `date_of_birth`, `image`, `type_of_doc`, `passport_upload_docs`, `visa_upload_documents`, `euss_upload_documents`, `nid_upload_documents`, `other_upload_documents`, `employee_code`, `first_name`, `middle_name`, `last_name`, `ni_no`, `marital_status`, `country_id`, `employee_type`, `date_of_confirmation`, `contact_start_date`, `contact_end_date`, `job_location`, `reporting_authority`, `leave_sanction_auth`, `education_details`, `job_details`, `key_respons`, `training_details`, `emger_contact_name`, `emger_email`, `emger_contact_no`, `emger_address`, `certifi_title`, `certifi_license_number`, `certifi_start_date`, `certifi_end_date`, `contact_info_post_code`, `contact_info_address`, `contact_info_address_1`, `contact_info_address_2`, `contact_info_address_3`, `contact_info_city_country`, `contact_info_country_id`, `pass_no`, `pass_nationality`, `pass_place_birth`, `pass_issued_by`, `pass_date`, `pass_expire_date`, `pass_review_date`, `visa_brp_np`, `visa_nationality`, `visa_country_residence`, `visa_issuedby`, `visa_issued_date`, `visa_expire_date`, `visa_eligbible_review_date`, `visa_current_yesno`, `visa_remarks`, `ess_ref_no`, `ess_nationality`, `ess_issued_by`, `ess_issued_date`, `ess_expire_date`, `ess_eligible_review_date`, `ess_current_visa`, `ess_remarks`, `nid_number`, `nid_nationality`, `nid_country_residence`, `nid_issue_date`, `nid_expire_date`, `nid_eli_review_date`, `nid_current_visa`, `nid_remarks`, `others_doc_name`, `others_ref_name`, `others_nationality`, `others_issue_date`, `others_expire_date`, `others_eligb_review_date`, `others_visa_sts`, `others_remarks`, `pay_group`, `pay_annual_pay`, `pay_wedges_pay_mode`, `pay_payment_type`, `pay_basic_daily_wedges`, `pay_min_working_hour`, `pay_tax_code`, `pay_tax_ref`, `pay_percentage`, `pay_payment_mode`, `pay_bank_name`, `pay_branch_name`, `pay_account_no`, `pay_sort_code`, `pay_remarks`, `payment_da`, `payment_hra`, `payment_conven_ta`, `payment_perfomance`, `payment_monthly_al`, `ni_dedu_da`, `ni_dedu_hra`, `ni_dedu_conven_ta`, `ni_dedu_perfomance`, `ni_dedu_monthly_al`, `entry_by`, `created_at`, `status`) VALUES
(1, 8, 4, 'Employee-1', 'bijon@gmail.com', '32 Yrs', '1', 'Dhaka , Bangladesh', 120000.00, '01915728982', '2023-07-07', '2023-07-21', '/backend/files/n3ZCXWhTKIWVi4TZfHto.jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'EMP-001', NULL, NULL, NULL, NULL, NULL, NULL, 'CONTRACTUAL', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2023-07-16 11:11:49', 1),
(2, 4, 5, 'Ibraheem', 'Ibraheem@gmail.com', '2', '1', 'Dhaka , Bangladesh', 50000.00, '112233456', '2023-07-28', '2023-07-27', '/backend/files/0HjRR3tDHvFgdwr00NAB.jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'EMP-002', 'null', 'null', 'null', 'null', 'null', 0, 'CONTRACTUAL', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', '', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', NULL, '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '', '', '', '', '', '', '', '', '', '', 1, '2023-07-16 11:12:51', 0),
(3, 8, 4, 'Raheem', 'Raheem@gmail.com', '32 Yrs', '1', 'Dhaka , Bangladesh', 120000.00, '01915728982', '2023-07-07', '2023-07-21', '/backend/files/n3ZCXWhTKIWVi4TZfHto.jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'EMP-003', 'null', 'null', 'null', 'null', 'null', 0, 'CONTRACTUAL', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', '', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '', '', '', '', '', '', '', '', '', '', 1, '2023-07-16 11:11:49', 0),
(4, 6, 6, 'Employee-3', 'we2022@gmail.com', '444', '1', '333', 34343.00, '343434', '2023-08-08', '2023-08-08', '/backend/files/ESzCAGIDj20ZJNLXthmy.jpg', NULL, NULL, NULL, NULL, NULL, NULL, 'EMP-004', 'Md.', 'Gazi', 'Uddin', '343434', 'Married', 8, 'CONTRACTUAL', '2023-08-29', '2023-08-17', '2023-08-18', 'fdg', 'dfg', 'dfg', 'dfg', 'dfg', 'dfgdfgdfg', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', '', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', '0000-00-00', '0000-00-00', '0000-00-00', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', NULL, 'null', 'null', 'null', 'null', 1, '2023-08-08 09:55:34', 0),
(5, 3, 4, 'Employee-4', 'onlinesoft@gmail.com', '33f1111', '1', 'fgfdgf1111', 330000.00, 'sdff1111', '2023-08-10', '2023-08-24', '/backend/files/yLueQNQHCDh4PEdlOmzf.jpg', '/backend/files/mK9pawBkTAUCnlnLLVZ8.jpg', '/backend/files/qtjiMkUrXLvCpHnPXfot.jpg', '/backend/files/ackvh94E74xeWVcqbHPt.jpg', '/backend/files/aGTivb3cUepDtHEyj9dm.jpg', '/backend/files/08gLujAFSq6VKfQTbuKi.jpg', NULL, 'EMP-005', 'df1111', 'sdff1111', 'sdff1111', 'dsff1111', 'Single', 4, 'SUSPEND', '2023-08-16', '2023-08-23', '2023-08-31', 'dfgf1111', 'dfgf1111', 'dfgdfgf1111', 'dfgf1111', 'dfgf1111', 'dfgf1111', 'dfgdfgf1111', 'dfgdfgdfg111111', 'dfgdfg@gmail.comf1111', '353434f1111', 'sdfsdff1111', 'sdfsdff1111', 'sdfsdf111111', '2023-08-24', '2023-08-17', 'wewerf1111', 'werwer111111', 'dsfsdfsdf', 'dfdfdsf', 'dsfsdfsdf', '2023-08-31', '6', 'sdfsdf111111', '3', '2023-08-23', 'sdfsdf111111', '2023-08-18', '2023-08-24', '2023-08-25', 'sdf111111', '9', '5', 'sdfsdfsdf111111', '2023-08-22', '2023-08-16', '2023-08-24', 'Yes', '111111111111111111111111', 'sdfsdf11111', '11', 'sdfsdfsdf', '2023-08-31', '2023-08-16', '2023-08-25', 'Yes', 'asdasdf11111f11111f11111', '216548748', '2', '2', '2023-08-24', '2023-08-31', '2023-08-31', 'Yes', 'asdasdf11111f11111f11111', 'asd', 'sadasdasd', '2', '2023-08-17', '2023-08-23', '2023-08-23', 'Yes', 'sdfsdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'Cash', 'sdf', 'sdf', 'sdf', 'sdf', 'sdfsdf', 'true', 'true', 'false', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 1, '2023-08-15 11:10:11', 1),
(6, 7, 6, 'Employee6 Six Emp', 'OnlinessSit2221@gmail.com', 'eed', '1', 'fsdfsdf', 34234234.00, '324234', '2023-08-30', '2023-08-16', '/backend/files/I0ZYJ7wmwlVnZ1ZEe6Z9.jpg', '/backend/files/3iJXaelLRTTkIHBlVNq2.jpg', '/backend/files/sWe1DbkAU7lBaLTLQq57.jpg', '/backend/files/3Gqsx9Qm9HWakp3GoJDE.jpg', '/backend/files/kJDdkiRXW3igzULbs1RZ.jpg', NULL, '/backend/files/qQRq3ozkjgiEnkX2pTnl.jpg', 'EMP-006', 'Employee6', 'Six', 'Emp', 'sdfsdf', 'Widow', 10, 'SUSPEND', '2023-08-17', '2023-08-10', '2023-08-17', 'sdfs', '', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 's@gmail.com', 's', 'sdf', 'sfs', 'sdf', '2023-08-21', '2023-08-27', 'asdd', 'fsdf', 'sdf', 'sdf', 'sdfsdf', '2023-08-17', '2', 'dgdfg', '3', '2023-08-24', '3245', '0000-00-00', '0000-00-00', '0000-00-00', 'sdf', '3', '4', 'sdfsdf', '2023-08-17', '2023-08-18', '2023-08-17', '', '', 'sdfs', '6', '234234', '2023-08-21', '2023-08-24', '2023-08-25', 'No', '', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '', '', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-08-15 21:39:45', 1);

-- --------------------------------------------------------

--
-- Table structure for table `employee_docs`
--

CREATE TABLE `employee_docs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `emp_id` int(10) UNSIGNED NOT NULL COMMENT 'primary key of employee table',
  `title` varchar(255) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `doc_name` varchar(255) DEFAULT NULL,
  `doc` varchar(255) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employee_docs`
--

INSERT INTO `employee_docs` (`id`, `emp_id`, `title`, `note`, `doc_name`, `doc`, `entry_by`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 'Title-1', 'Note', NULL, '/backend/files/0LtHc43MXnbUgWIXk2KX.sql', 1, 1, '2023-07-13 04:41:50', '2023-07-28 04:42:07'),
(2, 1, 'Documents of bijon', 'Documents of bijonDocuments of bijonDocuments of bijonDocuments of bijonDocuments of bijonDocuments of bijon', NULL, '/backend/files/K9jKMJLLg7gBS5tMEdmT.sql', 1, 1, '2023-07-28 04:33:22', '2023-07-28 04:33:22'),
(3, 3, 'Raheem122', 'RaheemRaheemRaheem', NULL, '/backend/files/K9jKMJLLg7gBS5tMEdmT.sql', 1, 1, '2023-07-28 04:45:56', '2023-07-28 04:45:56');

-- --------------------------------------------------------

--
-- Table structure for table `employee_holidays`
--

CREATE TABLE `employee_holidays` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `employee_id` bigint(20) UNSIGNED NOT NULL COMMENT 'PK Of employees table',
  `holiday` varchar(255) NOT NULL,
  `used_holiday` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employee_holidays`
--

INSERT INTO `employee_holidays` (`id`, `employee_id`, `holiday`, `used_holiday`, `created_at`, `updated_at`) VALUES
(1, 80, '28', 0, '2023-07-21 11:42:56', '2023-07-21 11:42:56');

-- --------------------------------------------------------

--
-- Table structure for table `employee_leave_request`
--

CREATE TABLE `employee_leave_request` (
  `id` int(11) NOT NULL,
  `employe_id` int(11) DEFAULT NULL,
  `leave_type_id` int(11) DEFAULT NULL,
  `frm_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `date_of_application` date DEFAULT NULL,
  `no_of_leave` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0=pending,\r\n1=Approved 2=Reject. 	',
  `remarks` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee_leave_request`
--

INSERT INTO `employee_leave_request` (`id`, `employe_id`, `leave_type_id`, `frm_date`, `to_date`, `date_of_application`, `no_of_leave`, `status`, `remarks`, `created_at`, `updated_at`) VALUES
(1, 6, 1, '2023-09-02', '2023-09-07', '2023-09-02', '2', 1, NULL, '2023-09-02 19:43:31', '2023-09-02 15:06:15'),
(2, 5, 1, '2023-09-02', '2023-09-07', '2023-09-02', '200', 1, 'xddd', '2023-09-02 19:43:31', '2023-09-03 13:47:43'),
(3, 3, 1, '2023-09-02', '2023-09-07', '2023-09-02', '2', 1, NULL, '2023-09-02 19:43:31', '2023-09-02 19:43:31'),
(4, 6, 1, '2023-09-02', '2023-09-07', '2023-09-02', '2', 1, NULL, '2023-09-02 19:43:31', '2023-09-02 19:43:31'),
(5, 5, 1, '2023-09-02', '2023-09-07', '2023-09-02', '2', 1, NULL, '2023-09-02 19:43:31', '2023-09-02 19:43:31'),
(6, 5, 2, '2023-09-04', '2023-09-21', '2023-09-03', '44', 0, 'kk', '2023-09-03 13:35:14', '2023-09-03 13:35:14'),
(7, 5, 4, '2023-09-01', '2023-09-28', '2023-09-03', '27', 0, 'ddd', '2023-09-03 13:57:44', '2023-09-03 13:58:37'),
(8, 5, 2, '2023-09-01', '2023-09-02', '2023-09-03', '1', 0, NULL, '2023-09-03 13:58:05', '2023-09-03 13:58:05');

-- --------------------------------------------------------

--
-- Table structure for table `employee_type`
--

CREATE TABLE `employee_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee_type`
--

INSERT INTO `employee_type` (`id`, `name`, `status`, `entry_by`) VALUES
(1, 'FULL TIME', 1, 1),
(2, 'CONTRACTUAL', 1, 1),
(3, 'SUSPEND', 1, 1),
(4, 'PART TIME', 1, 1),
(5, 'LEFT', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `holiday`
--

CREATE TABLE `holiday` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `holiday`
--

INSERT INTO `holiday` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'New Year\'s Day', 1, NULL, NULL),
(2, 'Good Friday', 1, NULL, NULL),
(3, 'Early May Bank Holiday', 1, NULL, NULL),
(4, 'Spring Bank Holiday', 1, NULL, NULL),
(5, 'Christmas Day', 1, NULL, NULL),
(6, 'Boxing Day', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `leave_allocation`
--

CREATE TABLE `leave_allocation` (
  `id` int(11) NOT NULL,
  `employee_type` varchar(255) DEFAULT NULL,
  `employe_id` int(11) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `maximum_no_annual` varchar(255) DEFAULT NULL,
  `leave_type` varchar(255) DEFAULT NULL,
  `leave_in_hand` varchar(255) DEFAULT NULL,
  `effective_year` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leave_allocation`
--

INSERT INTO `leave_allocation` (`id`, `employee_type`, `employe_id`, `year`, `maximum_no_annual`, `leave_type`, `leave_in_hand`, `effective_year`, `status`, `created_at`, `updated_at`) VALUES
(1, 'FULL TIME', 6, '2024', '265', 'Unauthorised Absence', '65', '22222222222', 1, '2023-08-30 17:47:18', '2023-08-31 03:27:51'),
(2, 'FULL TIME', 6, '2021', '265', 'Unauthorised Absence', '5', '2021', 1, '2023-08-30 17:47:18', '2023-08-30 17:47:18'),
(3, 'FULL TIME', 6, '2026', '265', 'Unauthorised Absence', '70', '2022', 1, '2023-08-30 18:12:00', '2023-08-30 18:12:00'),
(4, 'FULL TIME', 5, '2021', '265', 'Unauthorised Absence', '10', '2022', 1, '2023-08-31 03:34:26', '2023-08-31 03:34:26'),
(5, 'FULL TIME', 5, '2023', '265', 'Unauthorised Absence', '5', '2023', 1, '2023-08-31 03:35:16', '2023-08-31 03:35:16'),
(7, 'LEFT', 3, '2026', '150', 'Unauthorised Absence', '5', '2026', 1, '2023-08-31 03:48:27', '2023-08-31 03:48:27'),
(8, 'LEFT', 3, '2024', '150', 'Unauthorised Absence', '145', '2014', 1, '2023-08-31 03:48:59', '2023-08-31 03:48:59');

-- --------------------------------------------------------

--
-- Table structure for table `leave_applications`
--

CREATE TABLE `leave_applications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `emp_id` int(10) UNSIGNED NOT NULL,
  `type` tinyint(4) NOT NULL COMMENT '1 = Casual Leave, 2 = Medical Leave',
  `application_date` date NOT NULL,
  `start_date` date NOT NULL,
  `previous_start_date` date DEFAULT NULL,
  `end_date` date NOT NULL,
  `previous_end_date` date DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `dp_status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 = Pending, 2 = Approved, 3 = Declined',
  `dp_approved_by` tinyint(4) DEFAULT NULL,
  `dp_approved_date` date DEFAULT NULL,
  `hr_status` tinyint(4) DEFAULT NULL,
  `hr_approved_by` tinyint(4) DEFAULT NULL,
  `hr_approved_date` date DEFAULT NULL,
  `application_date_changed_by` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leave_list`
--

CREATE TABLE `leave_list` (
  `id` int(11) NOT NULL,
  `day` varchar(255) DEFAULT NULL,
  `frm_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `no_of_days` varchar(255) DEFAULT NULL,
  `holiday_description` varchar(255) DEFAULT NULL,
  `holiday_type_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leave_list`
--

INSERT INTO `leave_list` (`id`, `day`, `frm_date`, `to_date`, `no_of_days`, `holiday_description`, `holiday_type_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Friday', '2023-08-03', '2023-08-31', '434', 'Description-1', 3, 1, '2023-08-30 05:57:54', '2023-08-30 06:54:51'),
(2, 'thrusday', '2023-08-30', '2023-09-27', '3', 'Description-2', 3, 1, '2023-08-30 05:59:11', '2023-08-30 05:59:11'),
(3, 'tuesday', '2023-08-24', '2023-08-31', '33', 'Description-3', 5, 1, '2023-08-30 06:07:15', '2023-08-30 06:07:15'),
(4, 'sunday', '2023-08-24', '2023-08-31', '333', 'Description-4', 4, 1, '2023-08-30 06:08:00', '2023-08-30 06:08:00'),
(5, 'monday', '2023-08-01', '2023-08-17', '16', 'Description-5', 3, 1, '2023-08-30 06:20:10', '2023-08-30 06:20:10');

-- --------------------------------------------------------

--
-- Table structure for table `leave_rule`
--

CREATE TABLE `leave_rule` (
  `id` int(11) NOT NULL,
  `employee_type_id` int(11) DEFAULT NULL,
  `leave_type_id` int(11) DEFAULT NULL,
  `maximum_no_annual` varchar(150) DEFAULT NULL,
  `effective_from` date DEFAULT NULL,
  `effective_to` date DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leave_rule`
--

INSERT INTO `leave_rule` (`id`, `employee_type_id`, `leave_type_id`, `maximum_no_annual`, `effective_from`, `effective_to`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '265', '2023-01-01', '2023-12-31', 2, '2023-08-30 13:01:21', '2023-09-02 15:05:11'),
(2, 2, 7, '160', '2023-01-01', '2023-12-31', 1, '2023-08-30 13:02:06', '2023-08-30 16:40:26'),
(3, 5, 1, '150', '2024-01-01', '2024-12-31', 1, '2023-08-31 03:48:09', '2023-08-31 03:48:09');

-- --------------------------------------------------------

--
-- Table structure for table `leave_type`
--

CREATE TABLE `leave_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leave_type`
--

INSERT INTO `leave_type` (`id`, `name`, `code`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Unauthorised Absence', 'U', 1, '2023-08-30 11:37:29', '2023-08-30 11:51:33'),
(2, 'Paternity Leave', 'PT', 1, '2023-08-30 11:39:39', '2023-08-30 11:51:40'),
(3, 'Holiday', 'H', 1, '2023-08-30 11:51:54', '2023-08-30 11:51:54'),
(4, 'Parental Leave', 'PL', 1, '2023-08-30 11:52:06', '2023-08-30 11:52:06'),
(5, 'Public Duties', 'P', 1, '2023-08-30 11:52:17', '2023-08-30 11:52:17'),
(6, 'Maternity Leave', 'M', 1, '2023-08-30 11:52:28', '2023-08-30 11:52:28'),
(7, 'Jury Service', 'J', 1, '2023-08-30 11:52:41', '2023-08-30 11:52:41'),
(8, 'Bereavement Leave', 'B', 1, '2023-08-30 11:52:50', '2023-08-30 11:52:50'),
(9, 'Antenatal', 'AN', 1, '2023-08-30 11:53:01', '2023-08-30 11:53:01'),
(10, 'Adoption Leave', 'AL', 1, '2023-08-30 11:53:11', '2023-08-30 11:53:11'),
(11, 'Authorised Absence', 'A', 1, '2023-08-30 11:53:25', '2023-08-30 11:53:25');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_type`
--

CREATE TABLE `payment_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT 'Payment_type',
  `working_hour` varchar(255) DEFAULT NULL,
  `rate` decimal(10,2) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment_type`
--

INSERT INTO `payment_type` (`id`, `name`, `working_hour`, `rate`, `status`, `entry_by`) VALUES
(1, 'Bank', '120', 100.00, 1, 1),
(2, 'Bank', '12', 15.00, 1, 1),
(3, 'Bank', '12', 30.00, 1, 1),
(4, 'Crypto', '6', 40.00, 1, 1),
(5, 'Crypto', '120', 100.00, 1, 1),
(6, 'TT', '33', 3333.00, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `payroll_pay_item`
--

CREATE TABLE `payroll_pay_item` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT 'Head',
  `in_percent` varchar(255) DEFAULT NULL,
  `in_rupees` varchar(255) DEFAULT NULL,
  `min_value` varchar(255) DEFAULT NULL,
  `max_value` varchar(255) DEFAULT NULL,
  `effective_frm` date DEFAULT NULL,
  `effective_to` date DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payroll_pay_item`
--

INSERT INTO `payroll_pay_item` (`id`, `name`, `in_percent`, `in_rupees`, `min_value`, `max_value`, `effective_frm`, `effective_to`, `status`, `entry_by`) VALUES
(1, 'Test', '5', 'Yes', '15', '254', '2023-08-27', '2023-08-27', 1, 1),
(2, '213333', 'sdfsdf', '34', '33', '33', '2023-08-24', '2023-08-31', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pay_group`
--

CREATE TABLE `pay_group` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pay_group`
--

INSERT INTO `pay_group` (`id`, `name`, `status`, `entry_by`) VALUES
(1, 'Administrative Staff', 1, 1),
(2, 'Technical Team', 1, 1),
(3, 'Sales Team', 1, 1),
(4, 'Customer Service', 1, 1),
(5, 'Management', 1, 1),
(6, 'Production Workers', 1, 1),
(7, 'Finance and Accounting', 1, 1),
(8, 'Marketing and Communications', 1, 1),
(9, 'Research and Development (R&D)', 1, 1),
(10, 'Operations and Logistics', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`) VALUES
(1, 'dfgdfg', 'dd'),
(2, '1.95', 'ssdf'),
(3, 'sdfsdfsdf', 'ss'),
(4, 'zxc', 'pop'),
(5, 'Beef tozo', 'l;;l;'),
(6, 'xcv', 'xcvxcv');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `product_tag` varchar(255) DEFAULT NULL,
  `model` int(11) DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `external_link` varchar(255) DEFAULT NULL,
  `cash_dev_status` int(11) DEFAULT NULL,
  `price` double(10,5) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `stock_qty` int(11) DEFAULT NULL,
  `stock_mini_qty` int(11) DEFAULT NULL,
  `stock_status` int(11) DEFAULT NULL,
  `manufacturer` int(11) DEFAULT NULL,
  `download_link` varchar(255) DEFAULT NULL,
  `discount` double(10,5) DEFAULT NULL,
  `discount_status` int(11) DEFAULT NULL,
  `shipping_days` int(11) DEFAULT NULL,
  `free_shopping` int(11) DEFAULT NULL,
  `flat_rate_status` int(11) DEFAULT NULL,
  `flat_rate_price` double(10,5) DEFAULT NULL,
  `vat` varchar(255) DEFAULT NULL,
  `vat_status` int(11) DEFAULT NULL,
  `tax` varchar(255) DEFAULT NULL,
  `tax_status` int(11) DEFAULT NULL,
  `thumnail_img` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `slug`, `description`, `meta_title`, `meta_description`, `meta_keyword`, `product_tag`, `model`, `sku`, `external_link`, `cash_dev_status`, `price`, `unit`, `stock_qty`, `stock_mini_qty`, `stock_status`, `manufacturer`, `download_link`, `discount`, `discount_status`, `shipping_days`, `free_shopping`, `flat_rate_status`, `flat_rate_price`, `vat`, `vat_status`, `tax`, `tax_status`, `thumnail_img`, `status`, `entry_by`, `created_at`, `updated_at`) VALUES
(1, 'Amazon Essentials Women\'s', 'Amazon-Essentials-Short-Sleeve-Crewneck-T-Shirt', '<p>sdsd</p>', 'tag', 'Product1', 'Product1', 'tesing, data, mesign,', 0, 'SKU', 'http://localhost:3000/ecommarce/product-add', 2, 10.00000, 'KG', 1, 1, 7, 0, 'fgh', 0.00000, 1, 1, 0, 0, 0.00000, '0', 1, '0', 1, '/backend/files/BfaCxgEuEkpgQ4BETzAl.jpg', 1, 1, NULL, NULL),
(2, 'Pretty Polly Women\'s Eco Active Wear Short Sleeve T-Shirt', 'pretty-polly-women-s-eco-active-wear-short-sleeve-t-shirt', '<h2 style=\"margin-left:0px;\">About this item</h2><ul><li><span style=\"color:rgb(15,17,17);\">94% Polyamide, 6% Elastane</span></li><li><span style=\"color:rgb(15,17,17);\">Imported</span></li><li><span style=\"color:rgb(15,17,17);\">Pull On closure</span></li><li><span style=\"color:rgb(15,17,17);\">Machine Wash</span></li><li><span style=\"color:rgb(15,17,17);\">SUSTAINABLE: Pretty Polly’s new range of Active-Wear is another step towards a sustainable future. Uniquely made from predominately recycled yarns, the garments are seamless, soft and very comfortable to wear, specially made to move with you as you exercise.</span></li><li><span style=\"color:rgb(15,17,17);\">SHORT SLEEVE T-SHIRT: Pretty Polly Active-Wear Short Sleeve T-Shirt is a seamless top which features a patterned mesh panels detail on the sides for breathability. Fitted sleeves and full back.</span></li><li><span style=\"color:rgb(15,17,17);\">FEATURES: Garment has specially designed mesh panel to aid breathability. Stay cool when working out or doing other activities while wearing the Eco Active Wear.</span></li><li><span style=\"color:rgb(15,17,17);\">ACTIVITIES: The perfect apparel for yoga, pilates, and other non-vigorous workouts. Also great to wear when lounging or running errands.</span></li><li><span style=\"color:rgb(15,17,17);\">CARE INSTRUCTIONS: Machine Wash, Line Dry.</span></li></ul>', 'Pretty Polly Women\'s Eco Active Wear Short Sleeve T-Shirt', 'Pretty Polly Women\'s Eco Active Wear Short Sleeve T-Shirt', 'Pretty Polly Women\'s Eco Active Wear Short Sleeve T-Shirt', 'tat, ata', 0, 'SKU', 'http://localhost:3000/ecommarce/product-add', 2, 5000.00000, 'PC', 1, 1, 7, 0, 'Juices', 0.00000, 1, 1, 0, 0, 0.00000, '0', 1, '0', 1, '/backend/files/OD4UvxeoKVR7RJbX6I6i.jpg', 1, 1, NULL, NULL),
(3, 'Butterfly Women\'s Higo Lady Shirt,', 'butterfly-women-s-higo-lady-shirt-', '<h2 style=\"margin-left:0px;\">About this item</h2><ul><li><span style=\"color:rgb(15,17,17);\">100% Polyester</span></li><li><span style=\"color:rgb(15,17,17);\">Imported</span></li><li><span style=\"color:rgb(15,17,17);\">Sporty, modern, women’s table tennis shirt with a triangle pattern</span></li><li><span style=\"color:rgb(15,17,17);\">Developed in close collaboration with professional players</span></li><li><span style=\"color:rgb(15,17,17);\">Offers short sleeves, a V-neck style collar and a women’s tapered cut</span></li><li><span style=\"color:rgb(15,17,17);\">Features the Butterfly “Wings” logo on the left chest and the word “PRO” on the back of the collar.</span></li><li><span style=\"color:rgb(15,17,17);\">Material: Lycra Mix 140gsm 90/10 (100% polyester)</span></li></ul>', 'Butterfly Women\'s Higo Lady Shirt,', 'Butterfly Women\'s Higo Lady Shirt,', 'Butterfly Women\'s Higo Lady Shirt,', '', 0, 'SKU', 'http://localhost:3000/ecommarce/product-add', 2, 500.00000, 'KG', 1, 1, 7, 0, 'fgh', 0.00000, 1, 1, 0, 0, 0.00000, '0', 1, '0', 1, '/backend/files/y7bCz9xCiFutYGC0Bh8m.jpg', 1, 1, NULL, NULL),
(4, 'Women\'s Higo Lady Shirt,', 'women-s-higo-lady-shirt-', '<h2 style=\"margin-left:0px;\">About this item</h2><ul><li><span style=\"color:rgb(15,17,17);\">100% Polyester</span></li><li><span style=\"color:rgb(15,17,17);\">Imported</span></li><li><span style=\"color:rgb(15,17,17);\">Sporty, modern, women’s table tennis shirt with a triangle pattern</span></li><li><span style=\"color:rgb(15,17,17);\">Developed in close collaboration with professional players</span></li><li><span style=\"color:rgb(15,17,17);\">Offers short sleeves, a V-neck style collar and a women’s tapered cut</span></li><li><span style=\"color:rgb(15,17,17);\">Features the Butterfly “Wings” logo on the left chest and the word “PRO” on the back of the collar.</span></li><li><span style=\"color:rgb(15,17,17);\">Material: Lycra Mix 140gsm 90/10 (100% polyester)</span></li></ul>', 'Women\'s Higo Lady Shirt,', '', 'Women\'s Higo Lady Shirt,', '', 0, '48778', '', 2, 6500.00000, 'KG', 1, 1, 0, 0, '', 0.00000, 1, 1, 0, 0, 0.00000, '0', 1, '0', 1, '/backend/files/2e0Yu34IU6YJDksixmcb.jpg', 1, 1, NULL, NULL),
(5, 'ButterflyTable Tennis Shirt', 'butterflytable-tennis-shirt', '<ul><li><span style=\"color:rgb(15,17,17);\">100% Polyester</span></li><li><span style=\"color:rgb(15,17,17);\">Imported</span></li><li><span style=\"color:rgb(15,17,17);\">Sporty, modern, table tennis shirt for men</span></li><li><span style=\"color:rgb(15,17,17);\">Developed in close collaboration with professional players’ Timo Boll, Dimitrij Ovtcharov and Patrick Franziska</span></li><li><span style=\"color:rgb(15,17,17);\">A three button Henley style shirt with complementing pattern. Shirt allows room to move with slits on the side of the hem.</span></li><li><span style=\"color:rgb(15,17,17);\">Features the Butterfly “Wings” logo on the left chest and the word “PRO” on the back of the collar.</span></li><li><span style=\"color:rgb(15,17,17);\">Material: Lycra Mix 140gsm 90/10 (100% polyester).</span></li></ul>', 'ButterflyTable Tennis Shirt', 'ButterflyTable Tennis Shirt', 'ButterflyTable Tennis Shirt', 'ButterflyTable, Tennis, Shirt', 0, 'SKU', '', 2, 500.00000, '156', 1, 1, 0, 0, '', 0.00000, 1, 1, 0, 0, 0.00000, '0', 1, '0', 1, '/backend/files/QIMz4358Zf7It78r4y2S.jpg', 1, 1, NULL, NULL),
(6, 'Tennis Shirt', 'tennis-shirt', '<ul><li><span style=\"color:rgb(15,17,17);\">100% Polyester</span></li><li><span style=\"color:rgb(15,17,17);\">Imported</span></li><li><span style=\"color:rgb(15,17,17);\">Sporty, modern, table tennis shirt for men</span></li><li><span style=\"color:rgb(15,17,17);\">Developed in close collaboration with professional players’ Timo Boll, Dimitrij Ovtcharov and Patrick Franziska</span></li><li><span style=\"color:rgb(15,17,17);\">A three button Henley style shirt with complementing pattern. Shirt allows room to move with slits on the side of the hem.</span></li><li><span style=\"color:rgb(15,17,17);\">Features the Butterfly “Wings” logo on the left chest and the word “PRO” on the back of the collar.</span></li><li><span style=\"color:rgb(15,17,17);\">Material: Lycra Mix 140gsm 90/10 (100% polyester).</span></li></ul>', 'Tennis Shirt', 'Tennis Shirt', 'Tennis Shirt', ', Tennis, Shirt', 223, '23', '', 2, 23.00000, 'KG', 1, 1, 0, 0, '', 0.00000, 1, 1, 0, 0, 0.00000, '0', 1, '0', 1, '/backend/files/MMKa0CB2lxnICqaL1OcB.jpg', 1, 1, NULL, NULL),
(7, 'Pents', 'pents', '<p>PentsPentsPentsPentsPents</p>', 'Pents', 'Pents', 'Pents', 'Pents, Pents, Pents', 5, '22', '', 2, 23.00000, 'KG', 1, 1, 7, 0, '', 0.00000, 1, 1, 0, 0, 0.00000, '0', 1, '0', 1, '/backend/files/RdDN3AZfvRauDh9SK45T.jpg', 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_attributes`
--

CREATE TABLE `product_attributes` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `attributes_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_attributes`
--

INSERT INTO `product_attributes` (`id`, `product_id`, `attributes_id`, `created_at`, `updated_at`) VALUES
(1, 7, 8, '2023-10-15 14:52:34', '2023-10-15 14:52:34'),
(9, 7, 9, '2023-10-15 14:52:34', '2023-10-15 14:52:34'),
(11, 7, 10, '2023-10-15 22:36:40', '2023-10-15 22:36:40'),
(12, 7, 14, '2023-10-15 22:36:53', '2023-10-15 22:36:53'),
(13, 7, 1, '2023-10-15 23:05:05', '2023-10-15 23:05:05'),
(14, 7, 4, '2023-10-15 23:08:13', '2023-10-15 23:08:13'),
(15, 7, 5, '2023-10-15 23:08:24', '2023-10-15 23:08:24');

-- --------------------------------------------------------

--
-- Table structure for table `product_attributes_values_history`
--

CREATE TABLE `product_attributes_values_history` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `attribute_id` int(11) DEFAULT NULL,
  `product_attribute_id` int(11) DEFAULT NULL,
  `product_att_value_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_attributes_values_history`
--

INSERT INTO `product_attributes_values_history` (`id`, `product_id`, `attribute_id`, `product_attribute_id`, `product_att_value_id`, `created_at`, `updated_at`) VALUES
(1, 7, 8, 1, 61, '2023-10-15 08:52:34', '2023-10-15 08:52:34'),
(2, 7, 8, 1, 62, '2023-10-15 08:52:34', '2023-10-15 08:52:34'),
(3, 7, 8, 1, 63, '2023-10-15 08:52:34', '2023-10-15 08:52:34'),
(20, 7, 9, 9, 64, '2023-10-15 13:03:19', '2023-10-15 13:03:19'),
(21, 7, 9, 9, 65, '2023-10-15 13:03:19', '2023-10-15 13:03:19'),
(22, 7, 10, 11, 67, '2023-10-15 16:36:40', '2023-10-15 16:36:40'),
(23, 7, 10, 11, 68, '2023-10-15 16:36:40', '2023-10-15 16:36:40'),
(24, 7, 14, 12, 79, '2023-10-15 16:36:53', '2023-10-15 16:36:53'),
(25, 7, 1, 13, 1, '2023-10-15 17:05:05', '2023-10-15 17:05:05'),
(26, 7, 1, 13, 2, '2023-10-15 17:05:06', '2023-10-15 17:05:06'),
(27, 7, 1, 13, 29, '2023-10-15 17:05:06', '2023-10-15 17:05:06'),
(28, 7, 1, 13, 30, '2023-10-15 17:05:06', '2023-10-15 17:05:06'),
(29, 7, 4, 14, 49, '2023-10-15 17:08:13', '2023-10-15 17:08:13'),
(30, 7, 4, 14, 50, '2023-10-15 17:08:13', '2023-10-15 17:08:13'),
(31, 7, 5, 15, 52, '2023-10-15 17:08:24', '2023-10-15 17:08:24');

-- --------------------------------------------------------

--
-- Table structure for table `produc_categories`
--

CREATE TABLE `produc_categories` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `parent_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produc_categories`
--

INSERT INTO `produc_categories` (`id`, `product_id`, `category_id`, `parent_id`) VALUES
(1, 1, 69, '32,63,69'),
(2, 1, 71, '32,63,69,71'),
(3, 1, 72, '32,63,69,72'),
(4, 1, 73, '32,63,69,72,73'),
(5, 1, 74, '32,63,69,72,73,74'),
(6, 2, 71, '32,63,69,71'),
(7, 2, 72, '32,63,69,72'),
(8, 3, 71, '32,63,69,71'),
(9, 3, 72, '32,63,69,72'),
(10, 4, 71, '32,63,69,71'),
(11, 5, 72, '32,63,69,72'),
(12, 5, 73, '32,63,69,72,73'),
(13, 6, 71, '32,63,69,71'),
(14, 6, 72, '32,63,69,72'),
(15, 7, 72, '32,63,69,72'),
(16, 7, 73, '32,63,69,72,73'),
(17, 7, 74, '32,63,69,72,73,74');

-- --------------------------------------------------------

--
-- Table structure for table `produc_img_history`
--

CREATE TABLE `produc_img_history` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `images` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produc_img_history`
--

INSERT INTO `produc_img_history` (`id`, `product_id`, `images`) VALUES
(1, 1, '/backend/files/652ac7a06d651product(5).jpg'),
(2, 1, '/backend/files/652ac7a06e3f6product(6).jpg'),
(3, 1, '/backend/files/652ac7a06ee00product(7).jpg'),
(4, 1, '/backend/files/652ac7a06fa9cproduct(8).jpg'),
(5, 2, '/backend/files/652ac897f229dproduct(2).jpg'),
(6, 2, '/backend/files/652ac897f32ddproduct(3).jpg'),
(7, 2, '/backend/files/652ac897f41ecproduct(4).jpg'),
(8, 3, '/backend/files/652acf19c637fproduct(8).jpg'),
(9, 4, '/backend/files/652acf6c1f15bproduct(7).jpg'),
(10, 5, '/backend/files/652ad1023fe58product(6).jpg'),
(11, 5, '/backend/files/652ad102407c1product(7).jpg'),
(12, 6, '/backend/files/652ad222c8844product(1).jpg'),
(13, 7, '/backend/files/652b751376f84phone1.jpg'),
(14, 7, '/backend/files/652b75137d85dpower1.jpg'),
(15, 7, '/backend/files/652b75137e033power2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `status`, `entry_by`, `created_at`, `updated_at`) VALUES
(1, 'Smokee BBQ', 1, NULL, '2023-07-21 09:38:13', '2023-07-21 09:38:13'),
(2, 'Project-3', 1, 1, '2023-07-21 09:38:13', '2023-07-21 09:38:13'),
(3, 'Project-2', 1, 1, NULL, NULL),
(4, 'Project-1', 1, 1, NULL, NULL),
(5, 'sdfwwww', 1, 1, NULL, NULL),
(6, 'undefined', 0, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rule`
--

CREATE TABLE `rule` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rule`
--

INSERT INTO `rule` (`id`, `name`, `status`) VALUES
(1, 'Admin', 1),
(2, 'Employee', 1);

-- --------------------------------------------------------

--
-- Table structure for table `send_message`
--

CREATE TABLE `send_message` (
  `id` int(11) NOT NULL,
  `candidate_name` varchar(255) DEFAULT NULL,
  `candidate_email` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `candidate_cc` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `send_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `send_message`
--

INSERT INTO `send_message` (`id`, `candidate_name`, `candidate_email`, `subject`, `candidate_cc`, `description`, `file`, `send_by`, `created_at`) VALUES
(3, 'fgdfg', 'mdbijon@gmail.com', 'sdf', 'mdbijon@gmail.com', 'mdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.com', NULL, 1, '2023-08-19 04:33:25'),
(4, 'dsfsfsdf', 'mdbijon@gmail.com', 'ssss', '', 'In Laravel, you can easily attach files to a model using the attach method, especially when dealing with relationships like Eloquent\'s BelongsToMany or HasMany relationships. However, since you mentioned attaching files, I\'ll assume you\'re working with file uploads in the context of a form submission.', '/backend/files/SVfaIInZEZCDCGheQiF2.png', 1, '2023-08-19 05:02:28'),
(5, 'dfgdfg', 'mdbijon@gmail.com', 'ssss', '', 'sfdsf', '/backend/files/GwEyNFbWS6qZzWUCwjOE.png', 1, '2023-08-19 05:14:41'),
(6, 'dsfdsfsdf', 'mdbijon@gmail.com', 'fdgdfg', '', 'fggfdg', '', 1, '2023-08-19 06:30:44'),
(7, 'Md. Gazi Giash Uddin', 'ib@gmail.com', 'New Subject', '', 'Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate', '/backend/files/88wrHYRxDG94tmZ0Endb.png', 1, '2023-08-19 06:31:37'),
(8, 'Ibraheem', 'mdbijon@gmail.com', 'New Subject', '', 'ffff', '/backend/files/m6RklwhKmcSifwgvTfH0.png', 1, '2023-08-19 06:45:59'),
(9, 'Abdur Rahman Ibraheem', 'mdbijon@gmail.com', 'New Subject', '', 'If you want to conditionally send an email with or without an attachment, you can modify your Mailable class to include the attachment only when a certain condition is met. Here\'s how you can achieve that:If you want to conditionally send an email with or without an attachment, you can modify your Mailable class to include the attachment only when a certain condition is met. Here\'s how you can achieve that:If you want to conditionally send an email with or without an attachment, you can modify your Mailable class to include the attachment only when a certain condition is met. Here\'s how you can achieve that:If you want to conditionally send an email with or without an attachment, you can modify your Mailable class to include the attachment only when a certain condition is met. Here\'s how you can achieve that:', '/backend/files/u1ujrkQMqTX6ES7VZh69.png', 1, '2023-08-19 06:50:07');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL COMMENT 'primary key of project table',
  `emp_id` varchar(255) DEFAULT NULL COMMENT 'primary key of employee table',
  `type` tinyint(4) DEFAULT 1,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `done_date` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 = Pending, 2 = Processing, 3 = Done',
  `email_files` varchar(3) DEFAULT 'No',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `project_id`, `emp_id`, `type`, `start_date`, `end_date`, `done_date`, `image`, `entry_by`, `status`, `email_files`, `created_at`, `updated_at`) VALUES
(1, 'bijon1114144', 'sdlkflskdfsdf\r\nsdf\r\nsdf', 3, '2', 1, '2023-07-19', '2023-07-26', NULL, '/backend/files/QESG49nK6XzDuTd953Lm.env', 1, 1, 'No', NULL, NULL),
(2, 'Tesssss', 'fasd', 4, '1', 1, '2023-07-14', '2023-07-28', NULL, '/backend/files/tAWzPRjL7xUKnSUcOpW3.env', 1, 2, 'No', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `image` varchar(225) DEFAULT NULL,
  `phone_number` varchar(225) DEFAULT NULL,
  `address` varchar(225) DEFAULT NULL,
  `website` varchar(225) DEFAULT NULL,
  `github` varchar(225) DEFAULT NULL,
  `twitter` varchar(225) DEFAULT NULL,
  `instagram` varchar(225) DEFAULT NULL,
  `facebook` varchar(225) DEFAULT NULL,
  `show_password` varchar(225) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `employee_id`, `name`, `email`, `image`, `phone_number`, `address`, `website`, `github`, `twitter`, `instagram`, `facebook`, `show_password`, `email_verified_at`, `password`, `remember_token`, `entry_by`, `created_at`, `updated_at`, `status`) VALUES
(1, 1, 4, 'JONS', 'admin@gmail.com', '/backend/files/2LRy0wweiDi1mISlUSyv.jpg', '343434', 'Dhaka', 'http://localhost:3000/profile', 'http://localhost:3000/profile', 'http://localhost:3000/profile', 'http://localhost:3000/profile', 'http://localhost:3000/profile', 'admin', NULL, '$2a$12$KTM4o4shushdJtyHggJOEuoVzhTde88F2M2VZ1B89egoavVyQOycG', NULL, 1, '2023-06-22 03:20:43', '2023-07-14 04:47:21', 1),
(2, 2, 6, 'Employee6 Six Emp', 'OnlinessSit2221@gmail.com', NULL, '324234', '', NULL, NULL, NULL, NULL, NULL, 'Employee6', NULL, '$2y$10$4kiOBSk.NaB6ufs2rjKbU.BprUAELnD8vKdxbe0kSTRD3c6p7AlO2', NULL, 1, NULL, NULL, 1),
(3, 2, 5, 'Md. Gazi Giash Uddin Bijon', 'onlinesoft@gmail.com', '/backend/files/lPPEVF6wwxNYZVZKTUNH.jpg', '+8801915728982', 'Mirpur-1', 'null', 'null', 'null', 'null', 'null', 'Employee-4', NULL, '$2y$10$Dlo8W8qUsp./g0/KVKorr.eWVqATVLV4jyGjWApqsk6TFrl6adMhK', NULL, 1, NULL, NULL, 1),
(4, 2, 4, 'Employee-3', 'we2022@gmail.com', NULL, '343434', '', NULL, NULL, NULL, NULL, NULL, 'PasswordPassword', NULL, '$2y$10$oOca7klZbcO0xXV8glSx6ORQBIPsXOVNmZBdnex7JzeT7cjlyiLcm', NULL, 1, NULL, '2023-09-03 04:40:03', 1),
(5, 2, 2, 'Md. JONS', 'Ibraheem@gmail.com', '/backend/files/mIpe6aKfR5Lw5NDWFHAF.jpg', '+8801915728982', 'Mirpur-1', 'http://localhost:3000/profile', 'http://localhost:3000/profile', 'http://localhost:3000/profile', '', '', '112233456', NULL, '$2y$10$j0HQIkxcqrnN5Dt7hlm3rOhLzq.TBOhrbtmQi9tkrnybICy91U5lS', NULL, 1, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `variants`
--

CREATE TABLE `variants` (
  `id` int(11) NOT NULL,
  `attribute_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `annual_pay`
--
ALTER TABLE `annual_pay`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `apply_job`
--
ALTER TABLE `apply_job`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attributes_values`
--
ALTER TABLE `attributes_values`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bank_master`
--
ALTER TABLE `bank_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bank_short_code`
--
ALTER TABLE `bank_short_code`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `circumstances`
--
ALTER TABLE `circumstances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `designation`
--
ALTER TABLE `designation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_docs`
--
ALTER TABLE `employee_docs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_holidays`
--
ALTER TABLE `employee_holidays`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_employee_holidays_used_holiday` (`used_holiday`);

--
-- Indexes for table `employee_leave_request`
--
ALTER TABLE `employee_leave_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_type`
--
ALTER TABLE `employee_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `holiday`
--
ALTER TABLE `holiday`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_allocation`
--
ALTER TABLE `leave_allocation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_applications`
--
ALTER TABLE `leave_applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_list`
--
ALTER TABLE `leave_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_rule`
--
ALTER TABLE `leave_rule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_type`
--
ALTER TABLE `leave_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payment_type`
--
ALTER TABLE `payment_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payroll_pay_item`
--
ALTER TABLE `payroll_pay_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pay_group`
--
ALTER TABLE `pay_group`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_attributes`
--
ALTER TABLE `product_attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_attributes_values_history`
--
ALTER TABLE `product_attributes_values_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produc_categories`
--
ALTER TABLE `produc_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produc_img_history`
--
ALTER TABLE `produc_img_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rule`
--
ALTER TABLE `rule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `send_message`
--
ALTER TABLE `send_message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `annual_pay`
--
ALTER TABLE `annual_pay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `apply_job`
--
ALTER TABLE `apply_job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `attributes_values`
--
ALTER TABLE `attributes_values`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `bank_master`
--
ALTER TABLE `bank_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `bank_short_code`
--
ALTER TABLE `bank_short_code`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `circumstances`
--
ALTER TABLE `circumstances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `designation`
--
ALTER TABLE `designation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `employee_docs`
--
ALTER TABLE `employee_docs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employee_holidays`
--
ALTER TABLE `employee_holidays`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employee_leave_request`
--
ALTER TABLE `employee_leave_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `employee_type`
--
ALTER TABLE `employee_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `holiday`
--
ALTER TABLE `holiday`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `leave_allocation`
--
ALTER TABLE `leave_allocation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `leave_applications`
--
ALTER TABLE `leave_applications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leave_list`
--
ALTER TABLE `leave_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `leave_rule`
--
ALTER TABLE `leave_rule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `leave_type`
--
ALTER TABLE `leave_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `payment_type`
--
ALTER TABLE `payment_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payroll_pay_item`
--
ALTER TABLE `payroll_pay_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pay_group`
--
ALTER TABLE `pay_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product_attributes`
--
ALTER TABLE `product_attributes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `product_attributes_values_history`
--
ALTER TABLE `product_attributes_values_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `produc_categories`
--
ALTER TABLE `produc_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `produc_img_history`
--
ALTER TABLE `produc_img_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `rule`
--
ALTER TABLE `rule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `send_message`
--
ALTER TABLE `send_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `variants`
--
ALTER TABLE `variants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
