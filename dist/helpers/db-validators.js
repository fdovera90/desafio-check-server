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
exports.validateFormatRut = exports.isEmail = exports.positiveAmount = exports.accountExists = void 0;
const rutlib_1 = require("rutlib");
const DestinationAccount_1 = __importDefault(require("../models/DestinationAccount"));
const accountExists = (accountNumber) => __awaiter(void 0, void 0, void 0, function* () {
    const existAccountNumber = yield DestinationAccount_1.default.findOne({ accountNumber });
    if (existAccountNumber) {
        throw new Error(`El Número de Cuenta ${accountNumber} ya existe`);
    }
});
exports.accountExists = accountExists;
const positiveAmount = (amount) => __awaiter(void 0, void 0, void 0, function* () {
    if (amount <= 0) {
        throw new Error('El Monto debe ser mayor a cero');
    }
});
exports.positiveAmount = positiveAmount;
const isEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = /[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/;
    if (email.length != 0 && !regex.test(email)) {
        throw new Error('El Email debe tener un formato válido');
    }
});
exports.isEmail = isEmail;
const validateFormatRut = (rut) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, rutlib_1.validateRut)(rut)) {
        throw new Error('El Rut debe ser válido');
    }
});
exports.validateFormatRut = validateFormatRut;
//# sourceMappingURL=db-validators.js.map