describe('Testes em relatorio externo', () => {

    beforeEach(() => {
        cy.visit('/')
    });
    it('Criando relatorio externo', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.get('img[src="assets/icons/ic_add_circle.svg"]').click();
        cy.contains('span', 'Novo relatório externo').click();
        cy.get('input[id="reportForm-name"]').type('Cypress_02');
        cy.get('input[id="reportForm-caption"]').type('Cypress - 02');
        cy.get('mat-select[id="reportForm-groupId"]').type('Cypress - Testes Automatizados');
        cy.get('span[class="mat-option-text"]').contains('Cypress - Testes Automatizados').click();
        cy.get('input[id="reportForm-externalLink"]').type('https://ska.com.br/');
        cy.get('button').contains('span', 'Próximo').click();
        cy.get('button').contains('span', 'Finalizar e salvar').click();
        cy.confirmCreate();
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
        cy.contains('h1', 'Salvar').should('be.visible');
        cy.get('button').contains('span', 'Ok').click();
    });

    it('Excluindo relatorio externo', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.geren('Teste 2 - Cypress');
        cy.confirmDel();
    });
});