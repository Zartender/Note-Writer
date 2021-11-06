// requiring the package
const express = require('express');
const path = require('path');
// const { clog } = require('./middleware/clog');
const api = require('./routes/index');

const PORT = process.env.PORT || 3001;

// initializing express instance
const app = express();

// parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// GET Route for public404
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/404.html'))
);
// "GET route/click.listen Switches on server."
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
