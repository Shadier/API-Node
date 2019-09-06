"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product = require('../models/product');
exports.productRouter = express_1.Router();
exports.productRouter.get('/', (req, res) => {
    res.status(200).send({
        message: 'Lista de productos'
    });
});
//# sourceMappingURL=ProductController.js.map