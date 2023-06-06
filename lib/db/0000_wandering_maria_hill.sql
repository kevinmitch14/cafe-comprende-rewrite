-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Account` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`userId` varchar(191) NOT NULL,
	`type` varchar(191) NOT NULL,
	`provider` varchar(191) NOT NULL,
	`providerAccountId` varchar(191) NOT NULL,
	`refresh_token` text,
	`access_token` text,
	`expires_at` int,
	`token_type` varchar(191),
	`scope` varchar(191),
	`id_token` text,
	`session_state` varchar(191));

CREATE TABLE `Cafe` (
	`place_id` varchar(191) PRIMARY KEY NOT NULL,
	`latitude` double NOT NULL,
	`longitude` double NOT NULL,
	`name` varchar(191) NOT NULL,
	`updatedAt` datetime(3) NOT NULL);

CREATE TABLE `Review` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`email` varchar(191) NOT NULL,
	`place_id` varchar(191) NOT NULL,
	`rating` int NOT NULL DEFAULT 4,
	`wifi_rating` double NOT NULL DEFAULT 4,
	`vibe_rating` double NOT NULL DEFAULT 4,
	`location_rating` double NOT NULL DEFAULT 4);

CREATE TABLE `Session` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`sessionToken` varchar(191) NOT NULL,
	`userId` varchar(191) NOT NULL,
	`expires` datetime(3) NOT NULL);

CREATE TABLE `User` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191),
	`email` varchar(191),
	`emailVerified` datetime(3),
	`image` varchar(191));

CREATE TABLE `VerificationToken` (
	`identifier` varchar(191) NOT NULL,
	`token` varchar(191) PRIMARY KEY NOT NULL,
	`expires` datetime(3) NOT NULL);

CREATE TABLE `_CafeToUser` (
	`A` varchar(191) NOT NULL,
	`B` varchar(191) NOT NULL,
	PRIMARY KEY(`A`,`B`)
);

CREATE UNIQUE INDEX `Account_provider_providerAccountId_key` ON `Account` (`provider`,`providerAccountId`);
CREATE INDEX `Account_userId_idx` ON `Account` (`userId`);
CREATE UNIQUE INDEX `Cafe_place_id_key` ON `Cafe` (`place_id`);
CREATE INDEX `Review_email_idx` ON `Review` (`email`);
CREATE INDEX `Review_place_id_idx` ON `Review` (`place_id`);
CREATE UNIQUE INDEX `Session_sessionToken_key` ON `Session` (`sessionToken`);
CREATE INDEX `Session_userId_idx` ON `Session` (`userId`);
CREATE UNIQUE INDEX `User_email_key` ON `User` (`email`);
CREATE UNIQUE INDEX `VerificationToken_token_key` ON `VerificationToken` (`token`);
CREATE UNIQUE INDEX `VerificationToken_identifier_token_key` ON `VerificationToken` (`identifier`,`token`);
CREATE UNIQUE INDEX `_CafeToUser_AB_unique` ON `_CafeToUser` (`A`,`B`);
CREATE INDEX `_CafeToUser_AB_idx` ON `_CafeToUser` (`B`);
*/