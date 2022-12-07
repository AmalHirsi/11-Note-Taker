const express = require("express");
const apiRoute = require("./routes/apiRoutes/notesRoutes.js");
const htmlRoute = require("./routes/htmlRoutes/index.js");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);


app.listen(PORT, () => {
    console.log('Listening on port ${PORT}.');
});