-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2024 at 02:24 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pets`
--

-- --------------------------------------------------------

--
-- Table structure for table `breeds`
--

CREATE TABLE `breeds` (
  `BreedID` int(11) NOT NULL,
  `BreedName` varchar(100) NOT NULL,
  `SpeciesID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `breeds`
--

INSERT INTO `breeds` (`BreedID`, `BreedName`, `SpeciesID`) VALUES
(1, 'Fire Dragon', 1),
(2, 'Fire Dragon', 1),
(3, 'Ice Dragon', 1),
(4, 'Earth Dragon', 1),
(5, 'Storm Dragon', 1),
(6, 'Lightning Dragon', 1),
(7, 'Shadow Dragon', 1),
(8, 'Celestial Dragon', 1),
(9, 'Golden Dragon', 1),
(10, 'Crystal Dragon', 1),
(11, 'Silver Dragon', 1),
(12, 'White Dragon', 1),
(13, 'Black Dragon', 1),
(14, 'Fire-Breathing Dragon', 1),
(15, 'Wind Dragon', 1),
(16, 'Water Dragon', 1),
(17, 'Plasma Dragon', 1),
(18, 'Frost Dragon', 1),
(19, 'Mystic Dragon', 1),
(20, 'Ancient Dragon', 1),
(21, 'Forest Dragon', 1),
(22, 'Sun Dragon', 1),
(23, 'Moon Dragon', 1),
(24, 'Star Dragon', 1),
(25, 'Lunar Dragon', 1),
(26, 'Solar Dragon', 1),
(27, 'Ocean Dragon', 1),
(28, 'Desert Dragon', 1),
(29, 'Volcanic Dragon', 1),
(30, 'Tornado Dragon', 1),
(31, 'Ethereal Dragon', 1),
(32, 'Phantom Dragon', 1),
(33, 'Meteor Dragon', 1),
(34, 'Stormbringer Dragon', 1),
(35, 'Tempest Dragon', 1),
(36, 'Radiant Dragon', 1),
(37, 'Glimmer Dragon', 1),
(38, 'Twilight Dragon', 1),
(39, 'Aurora Dragon', 1),
(40, 'Inferno Dragon', 1),
(41, 'Ember Dragon', 1),
(42, 'Ashen Dragon', 1),
(43, 'Labrador Retriever', 2),
(44, 'German Shepherd', 2),
(45, 'Golden Retriever', 2),
(46, 'Bulldog', 2),
(47, 'Beagle', 2),
(48, 'Poodle', 2),
(49, 'Rottweiler', 2),
(50, 'Boxer', 2),
(51, 'Dachshund', 2),
(52, 'Shih Tzu', 2),
(53, 'Persian', 3),
(54, 'Maine Coon', 3),
(55, 'Siamese', 3),
(56, 'Ragdoll', 3),
(57, 'Sphynx', 3),
(58, 'British Shorthair', 3),
(59, 'Bengal', 3),
(60, 'Abyssinian', 3),
(61, 'Scottish Fold', 3),
(62, 'Siberian', 3),
(63, 'Parakeet', 4),
(64, 'Canary', 4),
(65, 'Cockatiel', 4),
(66, 'Budgerigar', 4),
(67, 'Finch', 4),
(68, 'Lovebird', 4),
(69, 'African Grey', 4),
(70, 'Cockatoo', 4),
(71, 'Macaw', 4),
(72, 'Dove', 4),
(73, 'Goldfish', 5),
(74, 'Betta', 5),
(75, 'Guppy', 5),
(76, 'Mollie', 5),
(77, 'Swordtail', 5),
(78, 'Platies', 5),
(79, 'Neon Tetra', 5),
(80, 'Angelfish', 5),
(81, 'Corydoras', 5),
(82, 'Koi', 5),
(83, 'Syrian', 6),
(84, 'Dwarf Campbell Russian', 6),
(85, 'Dwarf Winter White', 6),
(86, 'Roborovski', 6),
(87, 'Chinese', 6),
(88, 'Long-Haired Syrian', 6),
(89, 'Short-Haired Syrian', 6),
(90, 'Black Bear', 6),
(91, 'Albino', 6),
(92, 'Teddy Bear', 6),
(93, 'Netherland Dwarf', 7),
(94, 'Holland Lop', 7),
(95, 'Mini Rex', 7),
(96, 'Angora', 7),
(97, 'English', 7),
(98, 'Dutch', 7),
(99, 'Flemish Giant', 7),
(100, 'Lionhead', 7),
(101, 'Rhinelander', 7),
(102, 'American Fuzzy Lop', 7),
(103, 'Red-Eared Slider', 8),
(104, 'Box Turtle', 8),
(105, 'Painted Turtle', 8),
(106, 'Sulcata Tortoise', 8),
(107, 'Russian Tortoise', 8),
(108, 'Leopard Tortoise', 8),
(109, 'African Spurred Tortoise', 8),
(110, 'Hermann\'s Tortoise', 8),
(111, 'Indian Star Tortoise', 8),
(112, 'Pancake Tortoise', 8),
(113, 'Bearded Dragon', 9),
(114, 'Leopard Gecko', 9),
(115, 'Iguana', 9),
(116, 'Anole', 9),
(117, 'Skink', 9),
(118, 'Uromastyx', 9),
(119, 'Tokay Gecko', 9),
(120, 'Chameleon', 9),
(121, 'Basilisk', 9),
(122, 'Water Dragon', 9),
(123, 'American Ferret', 10),
(124, 'European Ferret', 10),
(125, 'Polecat', 10),
(126, 'Sable Ferret', 10),
(127, 'Albino Ferret', 10),
(128, 'Dark-eyed White Ferret', 10),
(129, 'Cinnamon Ferret', 10),
(130, 'Champagne Ferret', 10),
(131, 'Silver Ferret', 10),
(132, 'Angora Ferret', 10),
(133, 'Abyssinian', 11),
(134, 'Peruvian', 11),
(135, 'American', 11),
(136, 'Teddy', 11),
(137, 'Coronet', 11),
(138, 'Silkie', 11),
(139, 'Texel', 11),
(140, 'Sheba Mini Yak', 11),
(141, 'Rex', 11),
(142, 'White Crested', 11),
(143, 'African Pygmy', 12),
(144, 'European Hedgehog', 12),
(145, 'Egyptian Long-Eared', 12),
(146, 'Four-Toed', 12),
(147, 'Long-Tailed', 12),
(148, 'American Hedgehog', 12),
(149, 'Sunda Hedgehog', 12),
(150, 'Indian Hedgehog', 12),
(151, 'Southern White-Breasted', 12),
(152, 'Northern White-Breasted', 12),
(153, 'Chinese Snail', 41);

-- --------------------------------------------------------

--
-- Table structure for table `owners`
--

CREATE TABLE `owners` (
  `OwnerID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `ContactDetails` varchar(100) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `owners`
--

INSERT INTO `owners` (`OwnerID`, `Name`, `ContactDetails`, `Address`) VALUES
(1, 'Chinita', ' 123-456-789', 'Japan 3rd Floor');

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE `pets` (
  `PetID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `SpeciesID` int(11) NOT NULL,
  `BreedID` int(11) NOT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `OwnerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pets`
--

INSERT INTO `pets` (`PetID`, `Name`, `SpeciesID`, `BreedID`, `DateOfBirth`, `OwnerID`) VALUES
(1, 'Blacky', 1, 1, '0000-00-00', 1),
(2, 'Igneel', 1, 2, '2022-03-01', 1),
(3, 'Hydra of Lerna', 42, 35, '2020-03-18', 1);

-- --------------------------------------------------------

--
-- Table structure for table `species`
--

CREATE TABLE `species` (
  `SpeciesID` int(11) NOT NULL,
  `SpeciesName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `species`
--

INSERT INTO `species` (`SpeciesID`, `SpeciesName`) VALUES
(1, 'Dragon'),
(2, 'Dog'),
(3, 'Cat'),
(4, 'Bird'),
(5, 'Fish'),
(6, 'Hamster'),
(7, 'Rabbit'),
(8, 'Turtle'),
(9, 'Lizard'),
(10, 'Ferret'),
(11, 'Guinea Pig'),
(12, 'Hedgehog'),
(13, 'Chinchilla'),
(14, 'Gerbil'),
(15, 'Parrot'),
(16, 'Canary'),
(17, 'Goldfish'),
(18, 'Betta Fish'),
(19, 'Iguana'),
(20, 'Koi'),
(21, 'Cockatiel'),
(22, 'Mouse'),
(23, 'Rat'),
(24, 'Squirrel'),
(25, 'Ferret'),
(26, 'Macaw'),
(27, 'Cockatoo'),
(28, 'Budgerigar'),
(29, 'Dove'),
(30, 'Pigeon'),
(31, 'African Grey'),
(32, 'Lovebird'),
(33, 'Finch'),
(34, 'Tetra'),
(35, 'Guppy'),
(36, 'Mollie'),
(37, 'Platies'),
(38, 'Swordtail'),
(39, 'Catfish'),
(40, 'Shrimp'),
(41, 'Snail'),
(42, 'Hydra');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `breeds`
--
ALTER TABLE `breeds`
  ADD PRIMARY KEY (`BreedID`),
  ADD KEY `SpeciesID` (`SpeciesID`);

--
-- Indexes for table `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`OwnerID`);

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`PetID`),
  ADD KEY `OwnerID` (`OwnerID`),
  ADD KEY `SpeciesID` (`SpeciesID`),
  ADD KEY `BreedID` (`BreedID`);

--
-- Indexes for table `species`
--
ALTER TABLE `species`
  ADD PRIMARY KEY (`SpeciesID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `breeds`
--
ALTER TABLE `breeds`
  MODIFY `BreedID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT for table `owners`
--
ALTER TABLE `owners`
  MODIFY `OwnerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `PetID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `species`
--
ALTER TABLE `species`
  MODIFY `SpeciesID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `breeds`
--
ALTER TABLE `breeds`
  ADD CONSTRAINT `breeds_ibfk_1` FOREIGN KEY (`SpeciesID`) REFERENCES `species` (`SpeciesID`);

--
-- Constraints for table `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`OwnerID`) REFERENCES `owners` (`OwnerID`),
  ADD CONSTRAINT `pets_ibfk_2` FOREIGN KEY (`SpeciesID`) REFERENCES `species` (`SpeciesID`),
  ADD CONSTRAINT `pets_ibfk_3` FOREIGN KEY (`BreedID`) REFERENCES `breeds` (`BreedID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
