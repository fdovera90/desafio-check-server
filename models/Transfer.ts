import { getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { DestinationAccount } from './DestinationAccount';

class Transfer {

    @prop({ required: true, min: 1 })
    public amount: number;

    @prop({ ref: () => DestinationAccount })
    public destinationAccount: Ref<DestinationAccount>;

}

const TransferModel = getModelForClass( Transfer,  { schemaOptions: { timestamps: true } } );
export default TransferModel;