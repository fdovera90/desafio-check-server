import { Router } from 'express';
import { body, check } from 'express-validator';
import { getDestinationAccounts, postDestinationAccount } from '../controllers/destination-accounts';
import { accountExists, isEmail, validateFormatRut } from '../helpers/db-validators';
import { validateFields } from '../middlewares/validate-fields';

const router = Router();

router.get(  '/', getDestinationAccounts );
router.post( '/',
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('rut', 'El rut es obligatorio').notEmpty(),
    body('rut').custom( validateFormatRut ),
    body('email').custom( isEmail ),
    check('phone', 'El telefono debe tener 9 dígitos').isLength({max: 9}),
    check('bank', 'El banco es obligatorio').notEmpty(),
    check('accountType', 'El tipo de cuenta es obligatorio').notEmpty(),
    check('accountNumber', 'El número de cuenta es obligatorio').notEmpty(),
    body('accountNumber').custom( accountExists ),
    validateFields
, postDestinationAccount );

export default router;