const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('C:\Users\nessy\OneDrive\Dokumente\mongoose_aufgaben\pug_intro\pugProjekt\public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
