const express = require('express');
const port = 8080;
const app = express();

app.use(express.static('./src'));

app.listen(port, () => console.log(`Working on port: ${port}`));