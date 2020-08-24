const express = require('express');
const routes = require('./routes');
const app = express();

app.use(routes);
app.use(express.json());

app.listen(3000, () => {
    console.log('Server running on port ', process.env.PORT || 3000);
});