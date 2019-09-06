"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Purchase = require('../models/Purchase');
exports.purchaseRouter = express_1.Router();
exports.purchaseRouter.get('/', (req, res) => {
    res.status(200).send({
        message: 'purchasea de List'
    });
});
//# sourceMappingURL=PurchaseController.js.map