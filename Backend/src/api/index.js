const express = require('express');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', (req, res) => res.send('Test'));

app.listen(PORT, () => console.log(`localhost:${PORT}`));
