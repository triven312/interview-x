-- MySQL dump 10.13  Distrib 5.6.12, for Win32 (x86)
--
-- Host: localhost    Database: sys
-- ------------------------------------------------------
-- Server version	5.5.25a

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Database: `sys`
--

--
-- Table structure for table `tournament_standings`
--

CREATE TABLE `tournament_standings` (
  `team_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `points` int(5) NOT NULL,
  `matches` int(5) NOT NULL,
  `won` int(5) NOT NULL,
  `lost` int(5) NOT NULL,
  `draw` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('A',0,0,0,0,0);
INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('B',0,0,0,0,0);
INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('C',0,0,0,0,0);
INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('D',0,0,0,0,0);
INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('E',0,0,0,0,0);
INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('F',0,0,0,0,0);
INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('G',0,0,0,0,0);
INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('H',0,0,0,0,0);
INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('I',0,0,0,0,0);
INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('J',0,0,0,0,0);
