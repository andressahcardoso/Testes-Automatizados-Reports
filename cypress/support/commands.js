
// ----- RELATÓRIO -----

Cypress.Commands.add('createRel', () => {
    cy.get('#mat-input-2').type('Cypress_01'); //Utilizado o Selector Playground​ do Cypress
    cy.get('#mat-input-3').type('Cypress - 01'); //Utilizado o Selector Playground​ do Cypress
    cy.get('input[data-placeholder="Grupo"]').type('Cypress - Testes Automatizados');
    cy.get('span[class="mat-option-text"]').contains('Cypress - Testes Automatizados').click();
    cy.contains('span', 'Próximo').click({force: true});
    cy.contains('span', 'Próximo').click({force: true});
    cy.contains('span', ' Finalizar e salvar ').click({force: true});
})

Cypress.Commands.add('saveEditRel', () => {
    cy.contains('h1', 'Salvar edição').should('be.visible');
    cy.contains('span', 'Sim').click({force: true});
    cy.contains('h1', 'Salvar').should('be.visible');
    cy.contains('span', 'Ok').click({force: true});
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


// ----- GRÁFICOS -----

// ----- RELATÓRIO EXTERNO -----

// ----- SINÓTICO -----

// ----- DASHBOARD -----

// ----- CARD -----

// ----- FONTE DE DADOS -----

// ----- STRING DE CONEXÃO -----

// ----- FUNÇÃO -----

// ----- FAVORITO -----

// ----- USUÁRIO -----

// ----- GRUPO DE USUÁRIOS -----