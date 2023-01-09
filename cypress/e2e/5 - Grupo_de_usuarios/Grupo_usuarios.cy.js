describe('Testes em grupos de usuario', () => {
    
    beforeEach(() => {
        cy.visit('/')
    });
    it('Criando um grupo de usuarios', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openOptions()
        cy.contains('span', 'Novo grupo de usuários').click(); 
        cy.createUserG(Cypress.env('rel_title_id'), Cypress.env('rel_title'), Cypress.env('email'));
        cy.get('button').contains('span', 'Próximo').click();
        cy.get('mat-checkbox[id="mat-checkbox-8"]').click();
        cy.get('button').contains('span', 'Próximo').click({force: true});
        cy.get('button').contains('span', 'Próximo').click({force: true});
        cy.get('div[id="mat-tab-label-1-2"]').click();
        cy.get('div[class="mat-form-field-infix ng-tns-c76-92"]').type('Teste 16/09 (Gauge)');
        cy.get('#mat-checkbox-520 > .mat-checkbox-layout > .mat-checkbox-inner-container').click(); //Utilizado o Selector Playground​ do Cypress
        cy.get('button').contains('span', 'Finalizar e salvar').click();
        cy.confirmCreate();
        cy.existsGUs(Cypress.env('rel_title_id'))
    });
});

