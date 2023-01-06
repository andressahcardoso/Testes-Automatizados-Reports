describe('Grupos Syneco Reports', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Grupo Incorreto', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openOptions();
        cy.contains('span', 'Novo grupo').click();
        cy.get('input[data-placeholder="Título de exibição"]').type(Cypress.env('title')).clear();
        cy.contains('input', Cypress.env('title')).should('not.exist');
        cy.get('button[type="submit"]').click({force: true});
        cy.contains('span', 'Ok').should('not.exist');
    })

    it.only('Grupo Correto', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openOptions();
        cy.contains('span', 'Novo grupo').click();
        cy.get('input[data-placeholder="Título de exibição"]').type(Cypress.env('title'));
        cy.get('button[type="submit"]').click();
        cy.confirmCreate();
        cy.openSettings();
        cy.contains(Cypress.env('title'))
    });

    it.only('Excluindo um grupo', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openSettings();
        cy.get('img[class*="ic-search"]').click();
        cy.contains(Cypress.env('title'));
        cy.confirmDel();
        cy.get('input[data-placeholder="Procurar"]').clear().type(Cypress.env('title'));
        cy.get('img[class*="ic-search"]').click();
        cy.contains(Cypress.env('title')).should('not.exist');
    });

    it('Grupo correto com sistema', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.get('img[src="assets/images/logo_small.svg"]').should('be.visible');
        cy.get('img[src="assets/icons/ic_add_circle.svg"]').click();
        cy.contains('span', 'Novo grupo').click();
        cy.gerenGroup('input[data-placeholder="Título de exibição"]').type(Cypress.env('title'))
        cy.get('div[class="mat-slide-toggle-thumb"]').click()
        cy.get('button[type="submit"]').click()
    })
    it('Editando um relatório', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.gerenGroupEdit(Cypress.env('title'));
        cy.get('input[data-placeholder="Título de exibição"]').clear()
        cy.get('input[data-placeholder="Título de exibição"]').type(Cypress.env('editionTitle'))
        cy.get('div[class="mat-slide-toggle-thumb"]').click()
        cy.get('button[type="submit"]').click()
        cy.gerenGroupEdit(Cypress.env('title'));
        cy.get('div[class="mat-slide-toggle-thumb"]').click()
        cy.get('button[type="submit"]').click()
    });
    it('Excluindo após edição', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.gerenGroup(Cypress.env('editionTitle'));
    });
})