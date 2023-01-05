
describe('Login Syneco Reports', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('login correto', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.get('img[src="assets/images/logo_small.svg"]').should('be.visible');
    })

    it('senha correta', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password1'));
        cy.contains('mat-dialog-container', 'Falha na autenticação').should('be.visible');
    })

    it('senha correta', () => {
        cy.login(Cypress.env('userName1'), Cypress.env('password'));
        cy.contains('mat-dialog-container', ' Não foi possivel localizar o usuário ').should('be.visible');
    })

    it.only('senha correta', () => {
        cy.login(Cypress.env('userName1'), Cypress.env('password1'));
        cy.contains('mat-dialog-container', ' Não foi possivel localizar o usuário ').should('be.visible');
    })
})