describe('Sinótico Syneco Reports', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Criar Sinótico', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openOptions();
        cy.contains('span', 'Novo sinótico').click();
        cy.selectDataset2('SKA_Synoptic_Welle');
        cy.get('input[id="reportForm-name"]').type(Cypress.env('title'));
        cy.get('input[id="reportForm-caption"]').type(Cypress.env('title'));
        cy.contains('span', 'Coluna Chave').click();
        cy.contains('div', ' ResourceID' ).click();
        cy.get('#mat-select-value-5 > .mat-select-placeholder').click({force: true})
            .wait(500);
        cy.contains('div', ' ResourceName' ).click();
        cy.contains('span', 'Status').click();
        cy.contains('div', ' ResourceCode' ).click();
        cy.contains('span', 'Próximo').click({force: true});

        // cy.get('mat-select[id="legend-form-columnId"]').click().click();
        // cy.contains('div', ' ResourceID ').click();
        // cy.get('input[id="legend-form-caption"]').type('Verde');
    })

});