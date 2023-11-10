"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var PORT = 3000;
// Static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// EJS setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Route to render the slideshow page
app.get('/', function (req, res) {
    res.render('index');
});
app.use(function (req, res, next) {
    console.log("Requested: ".concat(req.url));
    next();
});
// Start server
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
