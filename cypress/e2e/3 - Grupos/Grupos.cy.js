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
        cy.get('span', 'Ok').should('not.exist');
    })

    it('Grupo Correto', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openOptions();
        cy.contains('span', 'Novo grupo').click();
        cy.get('input[data-placeholder="Título de exibição"]').type(Cypress.env('title'));
        cy.get('button[type="submit"]').click();
        cy.confirmCreate();
        cy.openSettings();
        cy.get('div[class^="mat-ripple"]').contains('span', 'Grupo').click().click()
            .wait(1000);
        cy.search();
        cy.contains(Cypress.env('title'))
    });

    it('Excluindo um grupo', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openSettings();
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content > span.ng-star-inserted').click()
            .wait(1000);
        cy.get('img[class*="ic-search"]').click();
        cy.contains(Cypress.env('title'))
            .wait(500);
        cy.search();
        cy.confirmDel();
        cy.get('input[data-placeholder="Procurar"]').clear();
        cy.search();
        cy.contains(Cypress.env('title')).should('not.exist');
    });
    it('Grupo correto com sistema', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openOptions();
        cy.contains('span', 'Novo grupo').click();
        cy.get('input[data-placeholder="Título de exibição"]').type(Cypress.env('title'));
        cy.get('div[class="mat-slide-toggle-thumb"]').click()
        cy.get('button[type="submit"]').click();
        cy.confirmCreate();
        cy.openSettings();
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content > span.ng-star-inserted').click()
            .wait(1000);
        cy.search();
        cy.contains(Cypress.env('title'))
    })

    it('Editando um Grupo', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openSettings();
        cy.get('div[class^="mat-ripple"]').contains('span', 'Grupo').click()
            .wait(1000);
        cy.search();
        cy.contains(Cypress.env('title'))
            .wait(500);
        cy.get(':nth-child(1) > .mat-button-wrapper > .material-icons').click()
        cy.get('input[data-placeholder="Título de exibição"]').clear()
        cy.get('input[data-placeholder="Título de exibição"]').type(Cypress.env('editionTitle'))
        cy.contains('span', 'Finalizar e salvar').click()
        cy.confirmCreate();
        cy.openSettings();
        cy.get('div[class^="mat-ripple"]').contains('span', 'Grupo').click().click()
            .wait(1000);
        cy.search2();
        cy.contains(Cypress.env('editionTitle'))
    });
    it('Excluindo após edição', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openSettings();
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content > span.ng-star-inserted').click()
            .wait(1000);
        cy.get('img[class*="ic-search"]').click();
        cy.contains(Cypress.env('editionTitle'))
            .wait(500);
        cy.search2();
        cy.confirmDel();
        cy.openSettings();
        cy.get('div[class^="mat-ripple"]').contains('span', 'Grupo').click().click()
            .wait(1000);
        cy.search2();
        cy.contains(Cypress.env('editionTitle')).should('not.exist');
        
    });
})