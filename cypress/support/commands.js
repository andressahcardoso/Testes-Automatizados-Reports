Cypress.Commands.add('login', (nome,senha) => {
    cy.get('input[id="login-form-user"]').type(nome);
    cy.get('input[id="login-form-password"]').type(senha, {log:false});
    cy.contains('button', 'Conectar').click();
})

Cypress.Commands.add('geren', (relatorio) => {
    cy.get('.mat-toolbar-row > :nth-child(6)').click(); //Utilizado o Selector Playground do Cypress
    cy.contains('span', ' Gerenciadores ').click();
    cy.get('input[data-placeholder="Procurar"]').type(relatorio);
    cy.get('img[class*="ic-search"]').click();
})
