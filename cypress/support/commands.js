
// ----- RELATÓRIO -----

Cypress.Commands.add('createRel', (rel_id, rel_name, rel_group) => {
    cy.get('#mat-input-2').type(rel_id); //Utilizado o Selector Playground​ do Cypress
    cy.get('#mat-input-3').type(rel_name); //Utilizado o Selector Playground​ do Cypress
    cy.get('input[data-placeholder="Grupo"]').type(rel_group);
    cy.get('span[class="mat-option-text"]').contains(rel_group).click();
})

Cypress.Commands.add('saveEditRel', () => {
    cy.contains('h1', 'Salvar edição').should('be.visible');
    cy.contains('span', 'Sim').click({force: true});
    cy.contains('h1', 'Salvar').should('be.visible');
    cy.contains('span', 'Ok').click({force: true});
})

Cypress.Commands.add('existsRel', (relName) => {
    cy.wait(600);
    cy.geren(relName);
    cy.get('mat-tree-node').contains('div', relName).should('be.visible');
})

Cypress.Commands.add('NOTexistsRel', (relNameNOT) => {
    cy.geren(relNameNOT);
    cy.contains('span', 'Nenhuma linha para exibir').should('be.visible');
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

Cypress.Commands.add('createUserG', (gUser, gdescript, gemail) => {
    cy.get('input[data-placeholder="Nome"]').type(gUser);
    cy.get('input[data-placeholder="Descrição"]').type(gdescript);
    cy.get('input[data-placeholder="Email"]').type(gemail);
})

Cypress.Commands.add('GUsGeren', (GUsearch) => {
    cy.get('.mat-toolbar-row > :nth-child(6)').click(); //Utilizado o Selector Playground do Cypress
    cy.contains('span', ' Gerenciadores ').click();
    cy.wait(500);
    cy.get('div[id="mat-tab-label-2-4"]').click()
})
Cypress.Commands.add('GUsGeren2', (GUsearch) => {
    cy.get('.mat-toolbar-row > :nth-child(6)').click(); //Utilizado o Selector Playground do Cypress
    cy.contains('span', ' Gerenciadores ').click();
    cy.wait(500);
    cy.get('div[class^="mat-ripple"]').contains('span', 'Grupo de usuários').click()
})

Cypress.Commands.add('existsGUs', (gName) => {
    cy.wait(600);
    cy.GUsGeren(gName);
    cy.contains('div', gName).should('be.visible');
})
Cypress.Commands.add('existsGUsEdit', (gName) => {
    cy.wait(600);
    cy.GUsGerenEdit(gName);
    cy.contains('div', gName).should('be.visible');
})