const fs = require('fs');



let rawdata = fs.readFileSync('data.json');
let reviews = JSON.parse(rawdata);


const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
app.use(cors());

app.get('/reviews', (req, res) => {
    res.send(reviews);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


app.get('/review/:id', (req, res) => {
    res.send(reviews[req.params.id]);
})
  