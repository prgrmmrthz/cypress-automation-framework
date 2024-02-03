/// <reference types="Cypress" />

describe("test data table", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#datepicker').invoke('removeAttr', 'target').click();
    });
    it("test", () => {
       cy.get('.datepicker-dropdown .datepicker-switch').first();
    });
})