const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
require('./Models/DBconfing');
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use('/medocs',require("./routes/medocsRouters"));
app.use('/pharmas',require("./routes/pharmaRouters"));

app.listen(5500, () => console.log('server listening on port ' + 5500))