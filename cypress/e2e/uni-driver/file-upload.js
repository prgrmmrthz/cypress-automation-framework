/// <reference types="Cypress" />

describe("test data table", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
    });
    it("test", () => {
        cy.get('#myFile').selectFile('C:/Users/Algorithm/Pictures/a.ico');
        cy.get('#submit-button').click();
    });
})