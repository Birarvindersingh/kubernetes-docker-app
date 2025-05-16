const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Updated message from k8s-docker-app!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});