// File for validating the pdfs

const fs = require('fs');
const path = require('path');

// Get pdf folder
const pdfDir = path.resolve(__dirname, 'pdfs');

// Function for verifying a pdf
function verify(name) {
   const fullPath = path.join(pdfDir, name);
   if (!name.toLowerCase().endsWith('.pdf')) {
        throw new Error("Requested file must be a .pdf");
   }

   if (!fs.existsSync(pdfDir)) {
        throw new Error(`404 PDF not found: ${pdfDir}`);
   }

   return `PDF exists: ${pdfDir}`;
}

// Export the verification function
module.exports = verify;
