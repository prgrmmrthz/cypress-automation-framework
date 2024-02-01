/// <reference types="Cypress" />

describe("test contact us form", () => {
    it.only("should submit a success contact form", () => {
        //code
        cy.visit("https://automationteststore.com/");
        cy.get("a[href$='contact']").click();
        cy.get("#ContactUsFrm_first_name").type('Test Name');
        cy.get("#ContactUsFrm_email").type('test_email@gmail.com');
        cy.get("#ContactUsFrm_enquiry").type('Test Enquiry');
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        //cy.xpath("//a[contains(@href, 'contact')]").click();
    });

    /* it("should not submit a success contact form as all fields are required", () => {
        //code
    }); */
})