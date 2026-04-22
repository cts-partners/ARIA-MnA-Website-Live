CREATE TABLE `contact_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstName` varchar(100) NOT NULL,
	`lastName` varchar(100),
	`email` varchar(320) NOT NULL,
	`company` varchar(200) NOT NULL,
	`title` varchar(200),
	`industry` varchar(100),
	`phone` varchar(50),
	`demoType` varchar(100),
	`message` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_submissions_id` PRIMARY KEY(`id`)
);
