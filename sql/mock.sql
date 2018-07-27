DROP TABLE IF EXISTS `mock_project`;

CREATE TABLE `mock_project` (
    `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(32) NOT NULL DEFAULT '',
    `describe` varchar(255) NOT NULL DEFAULT '',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

LOCK TABLES `mock_project` WRITE;
INSERT INTO `mock_project` VALUES (1, 'test', '测试');
UNLOCK TABLES;

DROP TABLE IF EXISTS `mock_interface`;
CREATE TABLE `mock_interface` (
    `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(32) NOT NULL DEFAULT '',
    `describe` varchar(255) NOT NULL DEFAULT '',
    `project_id` smallint(5) DEFAULT NULL,
    `url` varchar(32) NOT NULL DEFAULT '',
    `result` json NOT NULL,
    PRIMARY KEY(`id`),
    KEY `project_id` (`project_id`)
    -- CONSTRAINT `interface_ibfk` FOREIGN KEY (`project_id`) REFERENCES `mock_project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `mock_interface` WRITE;
INSERT INTO `mock_interface` VALUES (1, 'test', '测试', 1, 'api/test', '{ "data": "ok", "mesg": "ok" }');
UNLOCK TABLES;