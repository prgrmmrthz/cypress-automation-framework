/// <reference types="Cypress" />

describe("test iframe", () => {
  it.only("test", () => {
    //code
    cy.visit("https://webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({force: true});
    cy.url().should("contain", "IFrame");
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body).as('iframe');
    });
    cy.get('@iframe').find('#button-find-out-more').click();
    cy.get('@iframe').find('#myModal').as('modal');
    cy.get('@modal').should(($expected) => {
      expect($expected.text()).contains('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
    });
    cy.get('@modal').contains("Close").click();
  });
});
