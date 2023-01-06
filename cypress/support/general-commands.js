Cypress.Commands.add('login', (nome,senha) => {
    cy.get('input[id="login-form-user"]').type(nome);
    cy.get('input[id="login-form-password"]').type(senha, {log:false});
    cy.contains('button', 'Conectar').click();
})

Cypress.Commands.add('confirmDel', () => {
    cy.get('img[class*="ic-delete"]').click();
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

Cypress.Commands.add('openOptions', () => {
    cy.get('img[src="assets/images/logo_small.svg"]').should('be.visible');
    cy.get('img[src="assets/icons/ic_add_circle.svg"]').click();
})

Cypress.Commands.add('geren', (search) => {
    cy.get('.mat-toolbar-row > :nth-child(6)').click(); //Utilizado o Selector Playground do Cypress
    cy.contains('span', ' Gerenciadores ').click();
    cy.wait(500);
    cy.get('input[data-placeholder="Procurar"]').type(search);
    cy.get('img[class*="ic-search"]').click();
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