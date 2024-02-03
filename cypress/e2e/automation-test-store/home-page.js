/// <reference types="Cypress" />

describe("test homepage", () => {
  it("should click on the first item on featured products", () => {
    //code
    cy.visit("https://automationteststore.com/");

    cy.get(".fixed_wrapper")
      .find(".prdocutname")
      .eq(1)
      .click()
      .then((e) => {
        console.log("found item");
        console.log(e.text());
      });
    //console.log('log to browser');
    //cy.log('log to cypress');
    //cy.xpath("//a[contains(@href, 'contact')]").click();
  });

  it.only("test nav buttons for products", () => {
    //code
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("h1 .maintext").then(($h1Element) => {
      const h1Element = $h1Element.text();
      expect(h1Element).is.eq("Makeup");
    });
    cy.get(".fixed_wrapper .prdocutname")
      .eq(1)
      .invoke("text")
      .as("productThumbnail");

    cy.get("@productThumbnail")
      .should("eq", "Tropiques Minerale Loose Bronzer");
    /* const skincareLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");
    skincareLink.click().then($el => {
      cy.get("h1 .maintext").then(($h1Element) => {
        const h1Element = $h1Element.text().toUpperCase();
        expect(h1Element).is.eq("SKINCARE");
      });
    }); */
  });

  it("data testing", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("salePrice");

    let total = 0;
    cy.get("@itemPrice").then(($linkText) => {
      let ip = 0;
      let a = $linkText.split("$");
      a.forEach((element) => {
        cy.log(element);
        ip += Number(element);
      });
      total += ip;
      cy.log(`regular: ${ip}`);
    });

    cy.get("@salePrice")
      .then(($linkText) => {
        let s = 0;
        let a = $linkText.split("$");
        a.forEach((element) => {
          cy.log(element);
          s += Number(element);
        });
        total += s;
        cy.log(`sale: ${s}`);
      })
      .then(() => {
        cy.log(`grand total: ${total}`);
        expect(total).to.equal(660.5);
      });
  });
}); //describe
