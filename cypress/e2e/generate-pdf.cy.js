
// cypress/integration/my_test.spec.js
describe('PDF Report Generation', () => {
    it('exports report to PDF', () => {
        cy.visit('http://www.google.com'); // Visit your report page
        cy.task('printToPDF', {
            path: 'cypress/reports/my_report.pdf' // Specify the desired path
        });
    });
});