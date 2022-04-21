import { Router } from 'express';
import { body, check } from 'express-validator';
import { getTransfers, postTransfer } from '../controllers/transfers';
import { positiveAmount } from '../helpers/db-validators';
import { validateFields } from '../middlewares/validate-fields';

const router = Router();

router.get(  '/', getTransfers );
router.post( '/', 
    check('amount', 'El monto es obligatorio').notEmpty(),
    body('amount').custom( positiveAmount ),
    check('destinationAccount', 'La cuenta de destino es obligatoria').isString().notEmpty().isMongoId(),
    validateFields
, postTransfer );

export default router;