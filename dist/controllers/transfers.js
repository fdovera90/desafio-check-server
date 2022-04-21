"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTransfer = exports.getTransfers = void 0;
const Transfer_1 = __importDefault(require("../models/Transfer"));
const getTransfers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transfers = yield Transfer_1.default.find()
            .populate('destinationAccount', 'name rut bank accountType')
            .sort({ createdAt: -1 });
        res.json({
            transfers
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal Server Error - getTransfers'
        });
    }
});
exports.getTransfers = getTransfers;
const postTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const transfer = new Transfer_1.default(body);
    try {
        const transferDB = yield transfer.save();
        res.status(201).json({
            transferDB
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal Server Error - postTransfer'
        });
    }
});
exports.postTransfer = postTransfer;
//# sourceMappingURL=transfers.js.map