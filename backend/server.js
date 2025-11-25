// File that does all the action for the app

const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const PORT = process.env.PORT || 3000;
const hbs = require('hbs');

// Import your modules
const validatePdf = require('./validation');
const router = require('./routing');

// Set view engine and views directory
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Register partials directory
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Path to the PDF directory
const pdfDir = path.resolve(__dirname, 'pdfs');

// PDF validation middleware — runs for PDF requests
app.use('/pdfs/:filename', (req, res, next) => {
    const pdfName = req.params.filename;

    if (!validatePdf(pdfName)) {
        return res.status(404).send("PDF not found.");
    }
    next(); // continue to router
});

// Use the routing module
app.use(router);

// Listen in on the port number specified earlier
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
