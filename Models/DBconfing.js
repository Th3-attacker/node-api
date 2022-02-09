const mongoose = require('mongoose');

// mongoose.connect(
//     "mongodb://localhost:27017/pharmacie",
//     {useNewUrlParser: true, useUnifiedTopology:true },
//     (err)=>{
//         if(!err) console.log("mangodb connected");
//         else console.log("Connection error : " + err);
//     }
// )

mongoose.connect("mongodb://localhost:27017/pharmacie")
    .then(()=>{console.log("connexion ressu")})
    .catch(err=>{console.err(err.message)});