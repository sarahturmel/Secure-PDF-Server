// File that does the pdf discovery, finds them all from the pdfs folder

const fs = require('fs');
const path = require('path');

// Get pdf folder
const pdfDir = path.resolve(__dirname, 'pdfs');
const files = fs.readdirSync(pdfDir);

// Split jsons and pdfs
const pdfs = [];
const jsons = new Map();

for (const file of files) {
    if (file.toLowerCase().endsWith(".pdf") && !file.toLowerCase().endsWith(".pdf.json")) {
      pdfs.push(file);
    } else if (file.toLowerCase().endsWith(".pdf.json")) {
      const base = file.replace(/\.pdf\.json$/i, "");
      const fullPath = path.join(pdfDir, file);

        try {
            const raw = fs.readFileSync(fullPath, "utf8");
            const parsed = JSON.parse(raw);
            jsons.set(base, parsed);      // store parsed JSON
        } catch (err) {
            console.error(`Error reading/parsing JSON file ${file}:`, err);
            jsons.set(base, null);        // fallback
        }
    }
}

// Final list with pdfs matched to their jsons
const pdf_list = pdfs.map((pdfName) => {
    const base = pdfName.replace(/\.pdf$/i, "");
    return {
      pdf: pdfName,
      json: jsons.get(base) || null,
    };
});

// Export the final list
module.exports = pdf_list;
