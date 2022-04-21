import { Request, Response } from 'express';
import TransferModel from '../models/Transfer';

export const getTransfers = async ( req: Request, res: Response ) => {

    try {
        const transfers = await TransferModel.find()
                                             .populate( 'destinationAccount','name rut bank accountType' )
                                             .sort({ createdAt: -1 });

        res.json({
            transfers
        });    
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Internal Server Error - getTransfers'
        });   
    }
}

export const postTransfer = async ( req: Request, res: Response ) => {

    const { body } = req;
    const transfer = new TransferModel( body );

    try {
        const transferDB = await transfer.save();
        res.status(201).json({
            transferDB
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Internal Server Error - postTransfer'
        });   
    }
}