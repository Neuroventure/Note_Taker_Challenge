//require express//

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('/', (req, res) => res.send('Navigate to /notes or /index'));



//listen on port 3001//

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);