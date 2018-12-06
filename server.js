const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));