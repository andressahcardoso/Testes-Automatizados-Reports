Cypress.Commands.add('geren', (relatorio) => {
    cy.get('.mat-toolbar-row > :nth-child(6)').click(); //Utilizado o Selector Playground do Cypress
    cy.contains('span', ' Gerenciadores ').click();
    cy.get('input[data-placeholder="Procurar"]').type(relatorio);
    cy.get('img[class*="ic-search"]').click();
})

Cypress.Commands.add('openNewGroup', () => {
    cy.get('img[src="assets/images/logo_small.svg"]').should('be.visible');
    cy.get('img[src="assets/icons/ic_add_circle.svg"]').click();
    cy.contains('span', 'Novo grupo').click();
})

Cypress.Commands.add('saveViewGroup', () => {
    cy.get('button[disabled="false"]').click()
    cy.gerenGroup('Cypress - Testes Automatizados')
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('gerenGroup', (grupo) => {
    cy.get('.mat-toolbar-row > :nth-child(6)').click(); //Utilizado o Selector Playground do Cypress
    cy.contains('span', ' Gerenciadores ').click();
    cy.get('#mat-tab-label-1-2').click({force: true});
    cy.get('input[data-placeholder="Procurar"]').type(grupo);
    cy.get('img[class*="ic-search"]').click();
    
})

// Cypress.Commands.add('gerenGroupEdit', (grupo) => {
//     cy.get('.mat-toolbar-row > :nth-child(6)').click(); //Utilizado o Selector Playground do Cypress
//     cy.contains('span', ' Gerenciadores ').click();
//     cy.get('#mat-tab-label-1-2').click({force: true});
//     cy.get('input[data-placeholder="Procurar"]').type(grupo);
//     cy.get('img[class*="ic-search"]').click();
//     cy.contains('span', 'edit').click();
// })