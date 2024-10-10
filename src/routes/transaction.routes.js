const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction.controller");

/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Crear una nueva transacción
 *     description: Crea una nueva transacción en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               promotion_id:
 *                 type: string
 *                 description: El ID de la promoción aplicada (opcional).
 *               ride_id:
 *                 type: integer
 *                 description: El ID del ride.
 *               user_id:
 *                 type: integer
 *                 description: El ID del usuario.
 *               ride_cost:
 *                 type: number
 *                 description: El costo del ride.
 *     responses:
 *       200:
 *         description: Transacción creada con éxito.
 *       400:
 *         description: Error en la creación de la transacción.
 */
router.post("/", transactionController.createTransaction);

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Obtener todas las transacciones
 *     description: Obtiene una lista de todas las transacciones en la base de datos.
 *     responses:
 *       200:
 *         description: Lista de transacciones obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   promotion_id:
 *                     type: string
 *                   ride_id:
 *                     type: integer
 *                   user_id:
 *                     type: integer
 *                   ride_cost:
 *                     type: number
 *                   amount:
 *                     type: number
 *       404:
 *         description: No se encontraron transacciones.
 */
router.get("/", transactionController.getAllTransactions);

/**
 * @swagger
 * /transactions/{id}:
 *   get:
 *     summary: Obtener una transacción por ID
 *     description: Obtiene una transacción específica por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID de la transacción que se desea obtener.
 *     responses:
 *       200:
 *         description: Transacción obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 promotion_id:
 *                   type: string
 *                 ride_id:
 *                   type: integer
 *                 user_id:
 *                   type: integer
 *                 ride_cost:
 *                   type: number
 *                 amount:
 *                   type: number
 *       404:
 *         description: Transacción no encontrada.
 */
router.get("/:id", transactionController.getTransactionById);

/**
 * @swagger
 * /transactions/{id}:
 *   put:
 *     summary: Actualizar una transacción
 *     description: Actualiza los detalles de una transacción existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID de la transacción que se desea actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               promotion_id:
 *                 type: string
 *                 description: El ID de la promoción aplicada.
 *               ride_id:
 *                 type: integer
 *                 description: El ID del ride.
 *               user_id:
 *                 type: integer
 *                 description: El ID del usuario.
 *               ride_cost:
 *                 type: number
 *                 description: El costo del ride.
 *     responses:
 *       200:
 *         description: Transacción actualizada con éxito.
 *       404:
 *         description: Transacción no encontrada.
 */
router.put("/:id", transactionController.updateTransaction);

/**
 * @swagger
 * /transactions/{id}:
 *   delete:
 *     summary: Eliminar una transacción
 *     description: Elimina una transacción existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID de la transacción que se desea eliminar.
 *     responses:
 *       200:
 *         description: Transacción eliminada con éxito.
 *       404:
 *         description: Transacción no encontrada.
 */
router.delete("/:id", transactionController.deleteTransaction);

module.exports = router;