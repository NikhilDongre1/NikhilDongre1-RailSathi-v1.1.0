const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const cache = {};

app.use(cors({ origin: '*' })); 
app.use(express.static('public'));
app.use(express.json());

 

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
