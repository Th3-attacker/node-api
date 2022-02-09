const PharmaModel = require('../Models/pharmaModel');

module.exports.getAllPharmas = (req, res) => {
    PharmaModel.find((err, data) => {
        if(!err) res.send(data);
        else console.log("Erreur in Data")
    })
};
module.exports.addPharma = (req, res) => {   
    const newPharma = PharmaModel.create({
        name_fr: req.body.name_fr,
        name_ar : req.body.name_ar,
        adress_fr: req.body.adress_fr,
        adress_ar: req.body.adress_ar,
        tel: req.body.tel,
        id_wilaya: req.body.id_wilaya,
        id_moughataa: req.body.id_moughataa,
        lati: req.body.lati,
        longt: req.body.longt,
        wilaya: req.body.wilaya,
        wilaya_ar: req.body.wilaya_ar,
        moughataa: req.body.moughataa,
        moughataa_ar: req.body.moughataa_ar
    })  
};
