describe('Testes em grupos de usuario', () => {
    
    beforeEach(() => {
        cy.visit('/')
    });

// TÁ COM PROBLEMA
    it.only('Criando um grupo de usuarios', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openOptions()
        cy.contains('span', 'Novo grupo de usuários').click(); 
        cy.createUserG(Cypress.env('rel_title'), Cypress.env('rel_title_id'), Cypress.env('email'));
        cy.get('button').contains('span', 'Próximo').click();
        cy.get('mat-checkbox[id="mat-checkbox-8"]').click();
        cy.get('button').contains('span', 'Próximo').click({force: true});
        cy.get('button').contains('span', 'Próximo').click({force: true});
        cy.get('div[id="mat-tab-label-1-2"]').click(); 
        cy.get('button').contains('span', 'Finalizar e salvar').click();
        cy.confirmCreate();
        cy.existsGUs(Cypress.env('rel_title_id'))
    });

    it.only('Editando grupo de usuarios', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.GUsGerenEdit(Cypress.env('rel_title'));
    });
});

