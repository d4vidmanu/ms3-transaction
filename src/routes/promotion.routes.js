const express = require("express");
const router = express.Router();
const promotionController = require("../controllers/promotion.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Promotion:
 *       type: object
 *       properties:
 *         codigo:
 *           type: string
 *           description: Código único de la promoción
 *         porcentaje:
 *           type: integer
 *           description: Porcentaje de descuento de la promoción
 *         start_date:
 *           type: string
 *           format: date
 *         end_date:
 *           type: string
 *           format: date
 *       required:
 *         - codigo
 *         - porcentaje
 */

/**
 * @swagger
 * /promotions:
 *   post:
 *     summary: Crear una nueva promoción
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Promotion'
 *     responses:
 *       201:
 *         description: Promoción creada
 */
router.post("/", promotionController.createPromotion);

/**
 * @swagger
 * /promotions:
 *   get:
 *     summary: Obtener todas las promociones
 *     responses:
 *       200:
 *         description: Lista de promociones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Promotion'
 */
router.get("/", promotionController.getAllPromotions);

/**
 * @swagger
 * /promotions/{codigo}:
 *   get:
 *     summary: Obtener una promoción por código
 *     parameters:
 *       - in: path
 *         name: codigo
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Promoción encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Promotion'
 */
router.get("/:codigo", promotionController.getPromotionByCodigo);

/**
 * @swagger
 * /promotions/{codigo}:
 *   put:
 *     summary: Actualizar una promoción por código
 *     parameters:
 *       - in: path
 *         name: codigo
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Promotion'
 *     responses:
 *       200:
 *         description: Promoción actualizada
 */
router.put("/:codigo", promotionController.updatePromotion);

/**
 * @swagger
 * /promotions/{codigo}:
 *   delete:
 *     summary: Eliminar una promoción por código
 *     parameters:
 *       - in: path
 *         name: codigo
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       204:
 *         description: Promoción eliminada
 */
router.delete("/:codigo", promotionController.deletePromotion);

module.exports = router;
