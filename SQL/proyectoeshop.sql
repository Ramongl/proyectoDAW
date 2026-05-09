
CREATE TABLE IF NOT EXISTS `ccaa` (
  `id_provincia` char(2) NOT NULL,
  `nombre_provincia` varchar(50) NOT NULL,
  `comunidad_autonoma` varchar(50) NOT NULL,
  PRIMARY KEY (`id_provincia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `lineas_pedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pedido_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  CONSTRAINT `lineas_pedido_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `estado` enum('Pendiente','Procesado','Cancelado') DEFAULT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_usuario_pedido` (`usuario_id`),
  CONSTRAINT `fk_usuario_pedido` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text,
  `precio` decimal(10,2) NOT NULL,
  `categoria` enum('cosmetica','maquillaje','perfumes','cabello','higiene') NOT NULL,
  `subcategoria` enum('hidratante','serum','ojos','labios','rostro','unas','mujer','hombre','champu','acondicionador','tinte','gel','corporal','desodorante','manos') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` blob,
  `stock` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dni` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `domicilio` varchar(255) NOT NULL,
  `zipcode` int(5) NOT NULL,
  `zipId` char(2) NOT NULL,
  `rol` enum('admon','user') NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `actualizador_stock_ped_cancelados` AFTER UPDATE ON `pedidos` FOR EACH ROW BEGIN

   IF NEW.estado = 'cancelado' THEN

   	UPDATE productos 
      INNER JOIN lineas_pedido ON productos.id = lineas_pedido.producto_id
      SET productos.stock = productos.stock + lineas_pedido.cantidad
      WHERE lineas_pedido.pedido_id = NEW.id;

	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `actualizador_stock_ped_pendientes` AFTER INSERT ON `lineas_pedido` FOR EACH ROW BEGIN

    IF (SELECT estado FROM pedidos WHERE id = NEW.pedido_id) = 'pendiente' THEN

        UPDATE productos
        SET stock = stock - NEW.cantidad
        WHERE id = NEW.producto_id;

END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `cancelador_automatico` AFTER INSERT ON `lineas_pedido` FOR EACH ROW BEGIN
	DECLARE stock_actual INT;
	SELECT stock INTO stock_actual FROM productos WHERE id = NEW.producto_id;
	IF stock_actual < NEW.cantidad THEN
		UPDATE pedidos SET estado = 'cancelado' WHERE id = NEW.pedido_id;
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


