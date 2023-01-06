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
    });
});