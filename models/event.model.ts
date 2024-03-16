import { model,models,Document, Schema } from 'mongoose';

export interface IEvent extends Document {
    _id:string,
    title: string;
    description?: string;
    location?: string;
    createdAt: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree: boolean;
    category:{_id:string,name:string};
    organizer: {_id:string,firstname:string,Lastname:string};
}

const EventSchema=new Schema({
    title:{type:String,required:true},
    description:{type:String},
    location:{type:String},
    createdAt:{type:String,required:true},
    startDateTime:{type:Date,default:Date.now},
    endDateTime:{type:Date,default:Date.now},
    price:{type:String},
    isFree:{type:Boolean,default:false},
    category:{type:Schema.Types.ObjectId,ref:"Category"},
    organizer:{type:Schema.Types.ObjectId,ref:"User"}

})

export const Event=models.Event || model("Event",EventSchema)