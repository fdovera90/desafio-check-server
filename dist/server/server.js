"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const transfer_1 = __importDefault(require("../routes/transfer"));
const destination_account_1 = __importDefault(require("../routes/destination-account"));
const config_1 = require("../database/config");
class Server {
    constructor() {
        this.apiPaths = {
            transfers: '/api/transfers',
            destinationAccounts: '/api/destinationAccount'
        };
        (0, config_1.dbConnection)();
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.transfers, transfer_1.default);
        this.app.use(this.apiPaths.destinationAccounts, destination_account_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map