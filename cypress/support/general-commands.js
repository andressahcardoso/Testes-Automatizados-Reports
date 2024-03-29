Cypress.Commands.add('login', (nome,senha) => {
    cy.get('input[id="login-form-user"]').type(nome);
    cy.get('input[id="login-form-password"]').type(senha, {log:false});
    cy.contains('button', 'Conectar').click();
})

Cypress.Commands.add('confirmDel', () => {
    cy.get('img[class*="mat-focus-indicator]').click();
    cy.contains('h1', 'Confirmar exclusão').should('be.visible');
    cy.contains('span', 'Sim').click();
    cy.contains('h1', 'Excluir').should('be.visible');
    cy.contains('span', 'Ok').click()
})

Cypress.Commands.add('confirmDel2', () => {
    cy.get(':nth-child(2) > .mat-button-wrapper > .material-icons').click();
    cy.contains('h1', 'Confirmar exclusão').should('be.visible');
    cy.contains('span', 'Sim').click();
    cy.contains('h1', 'Excluir').should('be.visible');
    cy.contains('span', 'Ok').click()
})

Cypress.Commands.add('confirmCreate', () => {
    cy.contains('h1', 'Salvar').should('be.visible');
    cy.contains('span', 'Ok').click({force: true});
})

Cypress.Commands.add('selectDataset', (dataset) => {
    cy.get('input[id="mat-input-9"]').type(dataset);
    cy.get('div[class="mat-body-strong"]').contains('0').click();
    cy.contains('span', 'Próximo').click();
})

Cypress.Commands.add('selectDataset2', (dataset) => {
    cy.get('input[id="undefined-list-input-filter"]').type(dataset);
    cy.get('div[class="mat-body-strong"]').contains('1').click();
    cy.contains('span', 'Próximo').click();
})

Cypress.Commands.add('openOptions', () => {
    cy.get('img[src="assets/images/logo_small.svg"]').should('be.visible');
    cy.get('img[src="assets/icons/ic_add_circle.svg"]').click();
})


Cypress.Commands.add('openSettings', () => {
    cy.get('.mat-toolbar-row > :nth-child(6)').click(); //Utilizado o Selector Playground do Cypress
    cy.contains('span', ' Gerenciadores ').click();
})

Cypress.Commands.add('search', () => {
    cy.get('input[data-placeholder="Procurar"]').type(Cypress.env('title'));
    cy.get('img[class*="ic-search"]').click();
})

Cypress.Commands.add('search2', () => {
    cy.get('input[data-placeholder="Procurar"]').type(Cypress.env('editionTitle'));
    cy.get('img[class*="ic-search"]').click();
})

Cypress.Commands.add('geren', (search) => {
    cy.get('.mat-toolbar-row > :nth-child(6)').click(); //Utilizado o Selector Playground do Cypress
    cy.contains('span', ' Gerenciadores ').click();
    cy.wait(500);
    cy.get('input[data-placeholder="Procurar"]').type(search);
    cy.get('img[class*="ic-search"]').click();
})
