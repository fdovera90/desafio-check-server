"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const destination_accounts_1 = require("../controllers/destination-accounts");
const db_validators_1 = require("../helpers/db-validators");
const validate_fields_1 = require("../middlewares/validate-fields");
const router = (0, express_1.Router)();
router.get('/', destination_accounts_1.getDestinationAccounts);
router.post('/', (0, express_validator_1.check)('name', 'El nombre es obligatorio').notEmpty(), (0, express_validator_1.check)('rut', 'El rut es obligatorio').notEmpty(), (0, express_validator_1.body)('rut').custom(db_validators_1.validateFormatRut), (0, express_validator_1.body)('email').custom(db_validators_1.isEmail), (0, express_validator_1.check)('phone', 'El telefono debe tener 9 dígitos').isLength({ max: 9 }), (0, express_validator_1.check)('bank', 'El banco es obligatorio').notEmpty(), (0, express_validator_1.check)('accountType', 'El tipo de cuenta es obligatorio').notEmpty(), (0, express_validator_1.check)('accountNumber', 'El número de cuenta es obligatorio').notEmpty(), (0, express_validator_1.body)('accountNumber').custom(db_validators_1.accountExists), validate_fields_1.validateFields, destination_accounts_1.postDestinationAccount);
exports.default = router;
//# sourceMappingURL=destination-account.js.map