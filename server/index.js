const express = require('express');
const path = require('path');

const port = process.env.PORT || '8080';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use(express.static(path.resolve('..', 'client', 'build'))); //Telling the server where to find the front end files to serve
app.get('*', (req, res) => {
  res.sendFile(path.resolve('..', 'client', 'build', 'index.html')); //All other requests that are not for the server's router are sent to react that will handel them
});

module.exports = app;
