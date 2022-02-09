const mongoose = require('mongoose');

const MedocsModel = mongoose.model(
    "Medocs",
    {
            name: {
                type: "string",
                required: true
            },
            forme_dosage : {
                type: "string",
                required: true
            },
            pp : {
                type: "string",
                required: true
            }
    },
    "medocs"
);
module.exports = MedocsModel;
