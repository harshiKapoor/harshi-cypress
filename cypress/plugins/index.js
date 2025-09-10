const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
    on('task', {
        printToPDF: (options) => {
            return new Promise((resolve, reject) => {
                page.pdf(options).then(pdfBuffer => {
                    const filePath = path.join(__dirname, 'report.pdf'); // Example path
                    fs.writeFileSync(filePath, pdfBuffer);
                    resolve({ filePath });
                }).catch(reject);
            });
        }
    });
};