describe('Testes em relatorio externo', () => {

    beforeEach(() => {
        cy.visit('/')
    });
    it('Criando relatorio externo', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openOptions()
        cy.contains('span', 'Novo relatório externo').click();
        cy.createExtRel('Cypress_02', 'Cypress - 02', 'Cypress - Testes Automatizados')
        cy.get('input[id="reportForm-externalLink"]').type('https://ska.com.br/');
        cy.get('button').contains('span', 'Próximo').click();
        cy.get('button').contains('span', 'Finalizar e salvar').click();
        cy.confirmCreate();
        cy.existsRel('Cypress - 02');
    });

    it('Editando relatorio externo', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.geren('Cypress - 02');
        cy.get('img[class*="ic-edit-pen"]').click();
        cy.get('input[id="reportForm-name"]').clear().clear().type('Cypress_02_teste');
        cy.get('input[id="reportForm-caption"]').clear().type('Teste 2 - Cypress');
        cy.get('input[id="reportForm-externalLink"]').clear().type('https://www.alura.com.br/');
        cy.get('button').contains('span', 'Próximo').click();
        cy.get('button').contains('span', 'Finalizar e salvar').click();
        cy.saveEdExRel()
        cy.existsRel('Teste 2 - Cypress');
    });

    it('Excluindo relatorio externo', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.geren('Teste 2 - Cypress');
        cy.confirmDel();
        cy.wait(500);
        cy.NOTexistsRel('Teste 2 - Cypress')
    });
});