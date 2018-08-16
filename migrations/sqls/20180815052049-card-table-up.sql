-- ----------------------------------------------------------------------------
-- Table cray.cards
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `cray`.`cards` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` TEXT NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
