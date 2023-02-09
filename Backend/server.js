const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// app.use('/api', userRoutes);

// app.use('/', (req, res, next) => {
//     res.status(404).json({
//         errorMessage: 'No endpoint found.'
//     })
// });

app.get('/', (req, res) => {
    res.send("Hello world")
});

app.listen(port, () => console.log(`Server is listening on port ${port}.`))