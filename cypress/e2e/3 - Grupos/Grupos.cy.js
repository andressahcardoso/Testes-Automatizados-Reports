describe('Grupos Syneco Reports', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Grupo Incorreto', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.get('img[src="assets/images/logo_small.svg"]').should('be.visible');
        cy.get('img[src="assets/icons/ic_add_circle.svg"]').click();
        cy.contains('span', 'Novo grupo').click();
        cy.get('input[data-placeholder="Título de exibição"]').type('Cypress - Testes Automatizados').clear();
        cy.contains('input', 'Cypress - Testes Automatizados').should('not.exist')
        cy.get('button[disabled="true"]')
    })

    it('Grupo Correto', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.get('img[src="assets/images/logo_small.svg"]').should('be.visible');
        cy.get('img[src="assets/icons/ic_add_circle.svg"]').click();
        cy.contains('span', 'Novo grupo').click();
        cy.get('input[data-placeholder="Título de exibição"]').type('Cypress - Testes Automatizados')
        cy.get('button[type="submit"]').click()
    })

    it('Excluindo um grupo', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.gerenGroup('Cypress - Testes Automatizados');
    });

    it('Grupo correto com sistema', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.get('img[src="assets/images/logo_small.svg"]').should('be.visible');
        cy.get('img[src="assets/icons/ic_add_circle.svg"]').click();
        cy.contains('span', 'Novo grupo').click();
        cy.get('input[data-placeholder="Título de exibição"]').type('Cypress - Testes Automatizados')
        cy.get('div[class="mat-slide-toggle-thumb"]').click()
        cy.get('button[type="submit"]').click()
    })
    it('Editando um relatório', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.gerenGroupEdit('Cypress - Testes Automatizados');
        cy.get('input[data-placeholder="Título de exibição"]').clear()
        cy.get('input[data-placeholder="Título de exibição"]').type('Cypress - Testes Edição')
        cy.get('div[class="mat-slide-toggle-thumb"]').click()
        cy.get('button[type="submit"]').click()
        cy.gerenGroupEdit('Cypress - Testes Automatizados');
        cy.get('div[class="mat-slide-toggle-thumb"]').click()
        cy.get('button[type="submit"]').click()
    });

    it('Excluindo após edição', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.gerenGroup('Cypress - Testes Edição');
    });
})