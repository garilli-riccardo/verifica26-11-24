const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'www')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});
app.get('/api/mante', (req, res) => {
    const manteData = require(path.join(__dirname, '/api/mante.json'));
    res.json(manteData);
});

app.listen(port, () => {
    console.log(`Server su porta: ${port}`);
});