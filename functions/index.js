const functions = require('firebase-functions');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require("express-rate-limit");
const hpp = require('hpp');
const cors = require('cors');

dotenv.config({path: './config/config.env'});
const stripe = require('stripe')(process.env.secretKey);

const app = express();

// Body parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// Middlewares
// Dev logging development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Set security Helmet
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max     : 100 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

//Enable CORS
app.use(cors({origin: true}));

// Routes
// Example EndPoint: http://localhost:5001/clone-b1ddb/us-central1/api
app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payment Request Received for this amount >>> ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount  : total, // subunits of the currency
        currency: "eur",
    });

    // OK - Created
    res.status(201).send({clientSecret: paymentIntent.client_secret});
});

exports.api = functions.https.onRequest(app);
