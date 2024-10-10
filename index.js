const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();

app.use(express.json());

// Conexión a MongoDB
mongoose
    .connect(
        "mongodb://admin:password@18.213.167.234:8010/BackendDB?authSource=admin"
    )
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(3010, () => {
        console.log("Server is running on http://localhost:3010");
      });
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
    });

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Transacciones',
      version: '1.0.0',
      description: 'Documentación de la API de transacciones',
    },
    servers: [
      {
        url: 'http://localhost:3010', // Cambia esto por la IP si es necesario
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Ruta de los archivos donde tienes las rutas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas de la API
const promotionRoutes = require("./src/routes/promotion.routes");
const transactionRoutes = require("./src/routes/transaction.routes");
const boletaRoutes = require("./src/routes/boleta.routes");

app.use("/promotions", promotionRoutes);
app.use("/transactions", transactionRoutes);
app.use("/boletas", boletaRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Hello from Node API Transaction");
});

//instalar
//npm install swagger-ui-express swagger-jsdoc