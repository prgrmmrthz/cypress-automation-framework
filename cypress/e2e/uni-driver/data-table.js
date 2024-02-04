/// <reference types="Cypress" />

describe("test data table", () => {
    before(() => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#data-table').invoke('removeAttr', 'target').click();
    });
    it("calculate total age", () => {
        var userDetails = [];
        var num = 0
       cy.get('#thumbnail-1 td').each(($element, index, $list) => {
            if(Number($element.text())){
                num += Number($element.text());
            }
       }).then(() => {
            cy.log(num);
            expect(num).to.equals(322);
       });
    });
    it("get age of user which last name === Doe", () => {
        var userDetails = [];
        var num = 0
       cy.get('#thumbnail-1 tr td:nth-child(2)').each(($element, index, $list) => {
            if($element.text() === 'Doe'){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((a) =>{
                    console.log(a);
                    expect(Number(a.text())).to.equals(20);
                });
            }
       })
    });
})