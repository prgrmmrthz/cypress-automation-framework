/// <reference types="Cypress" />

describe("test data table", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true});
    });
    it("test", () => {
        cy.get('#datepicker').click();

        var date = new Date();
        date.setDate(date.getDate()+366);
        var month = date.toLocaleString('default', {month: 'long'});

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentdate => {
                if(!currentdate.text().includes(date.getFullYear())){
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            })
            .then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentdate => {
                    if(!currentdate.text().includes(month)){
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                    //console.log(month)
                })
            });
        }

        function selectDate(){
            cy.get('[class="day"]').contains(date.getDate()).click();
        }

        selectMonthAndYear();
        selectDate();

    });
})