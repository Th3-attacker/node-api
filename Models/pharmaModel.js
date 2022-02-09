const mongoose = require('mongoose');

const PharmaModel = mongoose.model(
    "Phama",
    {
        name_fr : {
            type : "string",
            required : true
        },
        name_ar: {
                type : "string",
                required : true
            },
        adress_fr : {
            type : "string",
            required : true
        },
        adress_ar: {
            type : "string",
            required : true
        },
        tel:{
            type : "string",
            required : true
        },
        id_wilaya:{
            type : "string",
            required : true
        },
        id_moughataa:{
            type : "string",
            required : true
        },
        lati:{
            type : "string",
            required : true
        },
        longt:{
            type : "string",
            required : true
        },
        wilaya :{
            type : "string",
            required : true
        },
        wilaya_ar:{
            type : "string",
            required : true
        },
        moughataa:{
            type : "string",
            required : true
        },
        moughataa_ar:{
            type : "string",
            required : true
        }
    },
    "pharmacie-data"
);
module.exports = PharmaModel;
