import { Request, Response } from 'express';
import { formatRut } from 'rutlib/lib';
import DestinationAccountModel from '../models/DestinationAccount';

export const getDestinationAccounts = async ( req: Request, res: Response ) => {
    
    try {
        const destinationAccounts = await DestinationAccountModel.find();      

        res.json({
            destinationAccounts
        });   
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Internal Server Error - getDestinationAccounts'
        });   
    }
}

export const postDestinationAccount = async ( req: Request, res: Response ) => {

    const { body } = req;
    body.rut = formatRut( body.rut, false );
    const destinationAccount = new DestinationAccountModel( body );
    
    try {
        const destinationAccountDB = await destinationAccount.save();
        res.status(201).json({
            destinationAccountDB
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Internal Server Error - postDestinationAccount'
        });   
    }
}