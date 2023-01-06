Cypress.Commands.add('geren', (relatorio) => {
    cy.get('.mat-toolbar-row > :nth-child(6)').click(); //Utilizado o Selector Playground do Cypress
    cy.contains('span', ' Gerenciadores ').click();
    cy.get('input[data-placeholder="Procurar"]').type(relatorio);
    cy.get('img[class*="ic-search"]').click();
})


// ----- GRUPO -----

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


// ----- RELATÓRIO EXTERNO -----

Cypress.Commands.add('createExtRel', (extern_id, extern_name, extern_group) => {
    cy.get('input[id="reportForm-name"]').type(extern_id);
    cy.get('input[id="reportForm-caption"]').type(extern_name);
    cy.get('mat-select[id="reportForm-groupId"]').type(extern_group);
    cy.get('span[class="mat-option-text"]').contains(extern_group).click();
})

Cypress.Commands.add('saveEdExRel', () => {
    cy.contains('h1', 'Salvar').should('be.visible');
    cy.get('button').contains('span', 'Ok').click();
})
// ----- GRÁFICOS -----

// ----- SINÓTICO -----

// ----- DASHBOARD -----

// ----- CARD -----

// ----- FONTE DE DADOS -----

// ----- STRING DE CONEXÃO -----

// ----- FUNÇÃO -----

// ----- FAVORITO -----

// ----- USUÁRIO -----

// ----- GRUPO DE USUÁRIOS -----