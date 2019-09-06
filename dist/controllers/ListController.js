"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const List = require('../models/list');
exports.listRouter = express_1.Router();
exports.listRouter.get('/', (req, res) => {
    res.status(200).send({
        message: 'Lista de List'
    });
});
//# sourceMappingURL=ListController.js.map