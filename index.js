const express = require('express');
const bodyParser = require("body-parser");
const routers = require('./routers');
const PORT = process.env.PORT || 3000
const app = express();

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/client'));
app.use('/api', routers)

app.listen(PORT, () => {
  console.log(`Sever is listening http://localhost:${PORT}`);
})
