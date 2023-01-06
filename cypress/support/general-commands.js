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
