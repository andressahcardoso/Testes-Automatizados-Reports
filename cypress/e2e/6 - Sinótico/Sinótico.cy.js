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
        cy.contains('span', 'Próximo').click({force: true});       
        cy.get('input[type="file"]')
            .attachFile('img-fabrica.jpg', { subjectType: 'input' });
        cy.contains('span', 'Escolha uma cor').click();
        cy.get('.mat-menu-content > [style="background: rgb(77, 182, 172);"]').click({force: true});
        cy.contains('span', 'Próximo').click({force: true});    
        
        cy.contains('div', ' BANCADA 01 ').click();
        cy.get('img[id="imageConfig2__-1_0"]').click();
        cy.contains('div', ' BANCADA 02 ').click();
        cy.get('img[id="imageConfig2__-1_0"]').click();
        cy.contains('span', 'Próximo').click({force: true});      
        cy.contains('span', 'Finalizar e salvar').click()
        cy.confirmCreate();
    })

});