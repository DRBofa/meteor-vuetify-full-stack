// import { Mongo } from 'meteor/mongo'
// const Invoice = new Mongo.Collection('invoices')
// export default Invoice



import SimpleSchema from 'simpl-schema'
import { Mongo } from "meteor/mongo";

const Invoice = new Mongo.Collection("invoices");
let schema = {};

schema.invoices = new SimpleSchema({
    customerId: {
        type: String,
    },
    date: {
        type: Date,
    },
    items: {
        type: Array,
    },
    'items.$': {
        type: Object,
    },
    
    'items.$.itemId': {
        type: String,
    },
    'items.$.qty': {
        type: Number,
    },
    no: Number,

});
Invoice.attachSchema(schema.invoices);
export default Invoice;