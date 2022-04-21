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
exports.postDestinationAccount = exports.getDestinationAccounts = void 0;
const lib_1 = require("rutlib/lib");
const DestinationAccount_1 = __importDefault(require("../models/DestinationAccount"));
const getDestinationAccounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const destinationAccounts = yield DestinationAccount_1.default.find();
        res.json({
            destinationAccounts
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal Server Error - getDestinationAccounts'
        });
    }
});
exports.getDestinationAccounts = getDestinationAccounts;
const postDestinationAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    body.rut = (0, lib_1.formatRut)(body.rut, false);
    const destinationAccount = new DestinationAccount_1.default(body);
    try {
        const destinationAccountDB = yield destinationAccount.save();
        res.status(201).json({
            destinationAccountDB
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal Server Error - postDestinationAccount'
        });
    }
});
exports.postDestinationAccount = postDestinationAccount;
//# sourceMappingURL=destination-accounts.js.map