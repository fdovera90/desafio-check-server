import { validateRut } from 'rutlib';
import DestinationAccountModel from "../models/DestinationAccount";

export const accountExists = async( accountNumber: number ): Promise<void> => {
    const existAccountNumber = await DestinationAccountModel.findOne({ accountNumber });
    if ( existAccountNumber ){
        throw new Error(`El Número de Cuenta ${ accountNumber } ya existe`);
    }
}

export const positiveAmount = async( amount: number ): Promise<void> => {
    if( amount <= 0 ){
        throw new Error('El Monto debe ser mayor a cero');
    }
}

export const isEmail = async( email: string ): Promise<void> => {
    const regex = /[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/;
    if ( email.length!=0 && !regex.test( email ) ) {
        throw new Error('El Email debe tener un formato válido');
    }
}

export const validateFormatRut = async( rut: string ): Promise<void> => {
    if( !validateRut( rut ) ){
        throw new Error('El Rut debe ser válido');
    }
}