const express = require("express");
const router = express.Router();
const boletaController = require("../controllers/boleta.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Boleta:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único de la boleta generado automáticamente
 *         fecha_emision:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de emisión de la boleta
 *         payment_method:
 *           type: string
 *           enum: [VISA, MASTERCARD, AMERICAN_EXPRESS]
 *           description: Método de pago utilizado
 *         amount:
 *           type: number
 *           format: float
 *           description: Monto total de la boleta
 *       required:
 *         - payment_method
 *         - amount
 */

/**
 * @swagger
 * /boletas:
 *   post:
 *     summary: Crear una nueva boleta
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Boleta'
 *     responses:
 *       201:
 *         description: Boleta creada
 */
router.post("/", boletaController.createBoleta);

/**
 * @swagger
 * /boletas:
 *   get:
 *     summary: Obtener todas las boletas
 *     responses:
 *       200:
 *         description: Lista de boletas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Boleta'
 */
router.get("/", boletaController.getAllBoletas);

/**
 * @swagger
 * /boletas/{id}:
 *   get:
 *     summary: Obtener una boleta por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Boleta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Boleta'
 */
router.get("/:id", boletaController.getBoletaById);

/**
 * @swagger
 * /boletas/{id}:
 *   put:
 *     summary: Actualizar una boleta por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Boleta'
 *     responses:
 *       200:
 *         description: Boleta actualizada
 */
router.put("/:id", boletaController.updateBoleta);

/**
 * @swagger
 * /boletas/{id}:
 *   delete:
 *     summary: Eliminar una boleta por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       204:
 *         description: Boleta eliminada
 */
router.delete("/:id", boletaController.deleteBoleta);

module.exports = router;
