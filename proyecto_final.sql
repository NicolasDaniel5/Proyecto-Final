-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-05-2021 a las 02:19:35
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre_producto` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_final` int(11) NOT NULL,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT 1,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `habilitado`, `ts_create`) VALUES
(21, 'Set matero', 400, 1, '2021-04-30 22:38:21'),
(22, 'Bolso matero con mantel', 500, 1, '2021-04-30 22:38:40'),
(23, 'Holder para lentes', 300, 1, '2021-04-30 22:39:18'),
(24, 'Cestas medianas', 300, 1, '2021-04-30 22:39:36'),
(25, 'Porta bolsas', 400, 1, '2021-04-30 22:40:32'),
(26, 'Holder para barbijos', 300, 1, '2021-04-30 22:40:49'),
(27, 'Neceser', 350, 1, '2021-04-30 22:41:24'),
(28, 'Bolso matero', 500, 1, '2021-04-30 22:42:00'),
(29, 'Set de baño', 400, 1, '2021-04-30 22:42:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_imagenes`
--

CREATE TABLE `productos_imagenes` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `uid` varchar(45) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `productos_imagenes`
--

INSERT INTO `productos_imagenes` (`id`, `id_producto`, `uid`, `ts_create`) VALUES
(6, 21, 'de8a85eb-4ab2-4d3b-b1b1-e94ebd345ee4.jpeg', '2021-04-30 22:38:21'),
(7, 22, '02ff870d-36d5-485e-a90f-c33dbdd9bae7.jpeg', '2021-04-30 22:38:40'),
(8, 23, '5f50bcae-4ded-48eb-a458-03c20e77270d.jpeg', '2021-04-30 22:39:18'),
(9, 24, 'fe7ae199-8da3-4c28-8458-26f6e64bf1ec.jpeg', '2021-04-30 22:39:36'),
(10, 25, '8dac089c-765f-4cbc-84ee-c80d476a962b.jpeg', '2021-04-30 22:40:32'),
(11, 26, '7ed5fa9f-dfec-4e8c-a88b-7ef6e5b4c9c8.jpeg', '2021-04-30 22:40:49'),
(12, 27, '26172f3b-f581-42db-b85d-e51024172362.jpeg', '2021-04-30 22:41:24'),
(13, 28, 'adc59ab1-85bf-4fb2-a38a-6375c0ba44fc.jpeg', '2021-04-30 22:42:00'),
(14, 29, '87442e46-7389-4700-9b4d-e902ca44f02c.jpeg', '2021-04-30 22:42:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `username` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `password` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `tipo_usuario` tinyint(1) NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT 1,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `mail`, `username`, `password`, `tipo_usuario`, `habilitado`, `ts_create`) VALUES
(9, 'Nicolas', 'Ferreyra', 'nicoferreyra@gmail.com', 'nicolas33', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 1, 1, '2021-04-30 22:36:16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  ADD CONSTRAINT `productos_imagenes_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
