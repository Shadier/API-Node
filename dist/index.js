'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const authorController_1 = require("./controllers/authorController");
const bookController_1 = require("./controllers/bookController");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true })
    .then(() => {
    console.log('conected to database successfully!');
})
    .catch(err => console.error(err));
const port = process.env.port || 1337;
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/authors', authorController_1.authorRouter);
app.use('/books', bookController_1.bookRouter);
app.get('/', (req, res) => {
    res.send("API is running OK");
});
app.listen(port, () => {
    console.log('App is running in port: ' + port);
});
//# sourceMappingURL=index.js.map