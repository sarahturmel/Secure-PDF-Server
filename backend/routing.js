// File to handle all of the routing

const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const router = express.Router();

// Import the list of pdfs and jsons
const pdfList = require('./discovery');
console.log(pdfList)
// Get the pdf directory
const pdfDir = path.join(__dirname, 'pdfs');

// Home page
router.get('/', (req, res) => {
    res.render('home', { pdf_dict: JSON.stringify(pdfList) });
});

// Serve each pdf
router.get('/pdfs/:filename', (req, res) => {
    const fileName = req.params.filename;
    const pdfPath = path.join(pdfDir, fileName);
    fs.access(pdfPath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send("404 PDF not found");
        }
	// File exists
        res.sendFile(pdfPath);
    });
});

module.exports = router;
