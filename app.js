const express = require('express');
const tripRouter = require('./routes/trip');
const app = express();

app.use(express.json());
app.use("/api/trip", tripRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));