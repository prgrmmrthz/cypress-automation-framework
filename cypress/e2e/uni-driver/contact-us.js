/// <reference types="Cypress" />

describe("test contact us form", () => {
    it("should submit a success contact form", () => {
        //code
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get("#contact_me").should('be.visible');
        cy.get('[name="first_name"]').type('Test Name');
        //cy.get("#ContactUsFrm_email").type('test_email@gmail.com');
        //cy.get("#ContactUsFrm_enquiry").type('Test Enquiry');
        //cy.get('button[title="Submit"]').click();
        //cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        //cy.xpath("//a[contains(@href, 'contact')]").click();
    });

    it("should not submit a success contact form as all fields are required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get("#contact_me").should('be.visible');
        cy.get('[name="first_name"]').type('Test Name');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})