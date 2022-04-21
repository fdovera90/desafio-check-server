"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const transfers_1 = require("../controllers/transfers");
const db_validators_1 = require("../helpers/db-validators");
const validate_fields_1 = require("../middlewares/validate-fields");
const router = (0, express_1.Router)();
router.get('/', transfers_1.getTransfers);
router.post('/', (0, express_validator_1.check)('amount', 'El monto es obligatorio').notEmpty(), (0, express_validator_1.body)('amount').custom(db_validators_1.positiveAmount), (0, express_validator_1.check)('destinationAccount', 'La cuenta de destino es obligatoria').isString().notEmpty().isMongoId(), validate_fields_1.validateFields, transfers_1.postTransfer);
exports.default = router;
//# sourceMappingURL=transfer.js.map