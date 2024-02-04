/// <reference types="Cypress" />

describe("test contact us form", () => {
    before(() => {
        cy.fixture('example_FINAL').then((data) => {
            globalThis.data = data;
        });
        cy.fixture('userDetails').as('user');
    });
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
    });
    it("should submit a success contact form", () => {
        //code
        cy.get("#contact_me").should('be.visible');
        cy.get('@user').then((data) => {
            cy.get('[name="email"]').type(data.email);
        });
        cy.get('[name="first_name"]').type(data.fn);
        cy.get('[name="last_name"]').type(data.ln);

        cy.get('[name="message"]').type(data.name);
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it("should not submit a success contact form as all fields are required", () => {
        cy.get("#contact_me").should('be.visible');
        cy.get('[name="first_name"]').type('Test Name');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})