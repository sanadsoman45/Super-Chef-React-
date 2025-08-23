const express = require('express');
const ingRouter = express.Router();
const ingController = require("../controllers/ingredients.controller");

ingRouter.get('/', ingController.getAllingredients);

module.exports = ingRouter
