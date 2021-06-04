const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static(__dirname + '/public/'));  //telling express that all our static files are in pblic folder

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`app running in port ${process.env.PORT}`);
  });
 