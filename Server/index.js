const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config();

// Routers
const subscriptionRouter = require('./Routers/subscription');
const authRouter = require('./Routers/auth');
const gptRouter = require('./Routers/prompt');

// Initialize Express app
const app = express();

// MongoDB URI from the .env file
const mongoURI = process.env.MONGO_URI;

// MongoDB session store setup
const store = new MongoDBStore({
    uri: mongoURI,
    collection: 'sessions',
});

store.on('error', function (error) {
    console.error('Session Store Error:', error);
});

// CORS configuration
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000', // Replace with your frontend URL or set in .env
    credentials: true,
}));

// Logging and body parsing middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session middleware
app.use(session({
    store: store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false, // Set to false to avoid creating sessions for non-authenticated users
    cookie: { 
        secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
        httpOnly: true, // Prevent client-side JS from accessing the cookie
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    },
}));

// Route handlers
app.use('/', subscriptionRouter);
app.use('/auth', authRouter);
app.use('/prompt', gptRouter);

// Root route
app.get('/', (req, res) => {
    res.send("Welcome to the home page");
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});