const express = require('express');
const userRoutes = require('./src/routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world")
});

app.use('/api', userRoutes);

app.use('/', (req, res, next) => {
    res.status(404).json({
        errorMessage: 'No endpoint found.'
    })
});



app.listen(port, () => console.log(`Server is listening on port ${port}.`))