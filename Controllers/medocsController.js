const ObjectID = require('mongoose').Types.ObjectId;

const MedocsModel = require('../Models/medocsModel');

module.exports.getAllMedocs = (req, res) => {
    MedocsModel.find((err, data) => {
        if(!err) res.send(data);
        else console.log("Erreur in Data")
    })
};

module.exports.editMedoc = (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID inconnue: " + req.params.id)
    const updateMedoc = {
        name: req.body.name,
        forme_dosage: req.body.forme_dosage,
        pp: req.body.pp
    };

    MedocsModel.findByIdAndUpdate(
        req.params.id,
        {$set : updateMedoc},
        {new : true},
        (err, data) => {
            if (!err) res.send(data);
            else console.log("Erreur in updated")
        }
    )
};

module.exports.deleteMedoc= (req, res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Id inconnue : " + req.params.id)

    MedocsModel.findByIdAndDelete(
        req.params.id,
        (err, data) => {
            if(!err) res.send(data);
            else console.log("Erreur in deleting" + err)
        }
    )
};