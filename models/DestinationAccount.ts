import { getModelForClass, prop } from '@typegoose/typegoose';

export class DestinationAccount {
    @prop({ required: true, trim: true })
    public name: string;

    @prop({ required: true, trim: true })
    public rut: string;

    @prop()
    public email?: string;

    @prop()
    public phone?: number;

    @prop({ required: true, trim: true })
    public bank: string;

    @prop({ required: true, trim: true })
    public accountType: string;

    @prop({ required: true, unique: true })
    public accountNumber: number;
}

const DestinationAccountModel = getModelForClass( DestinationAccount );
export default DestinationAccountModel;