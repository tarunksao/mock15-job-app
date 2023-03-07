require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnect } = require('./Configs/db');
const registerRoute = require('./Routes/register.route');
const loginRoute = require('./Routes/login.route');
const logoutRoute = require('./Routes/logout.route');
const jobsRoute = require('./Routes/jobs.route');

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/jobs', jobsRoute);

app.get('/', (req,res) => {
    res.send('Welcome to Job Portal');
});

app.listen(PORT, async () => {
    try{
        await dbConnect;
        console.log('Connected to the DB');
    } catch (err) {
        console.log('Error connecting to the DB');
        console.log(err);
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});