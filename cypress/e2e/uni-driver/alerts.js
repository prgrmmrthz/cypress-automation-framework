/// <reference types="Cypress" />

describe("test contact us form", () => {
  it("alert only", () => {
    //code
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.url().should("contain", "Popup-Alerts");
    cy.get("#main-header").should("be.visible");
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it.only("alert with confirm button", () => {
    //code
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.url().should("contain", "Popup-Alerts");
    cy.get("#main-header").should("be.visible");

    const stub = cy.stub().returns(false);
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed Cancel!");
      });
  });
});
