describe('Testes em relatorio externo', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login(Cypress.env('userName'), Cypress.env('password'));
    });
    it('Criando relatorio externo', () => {
        cy.openOptions()
        cy.contains('span', 'Novo relatório externo').click();
        cy.createExtRel(Cypress.env('rel_title_id'), Cypress.env('rel_title'), Cypress.env('title'))
        cy.get('input[id="reportForm-externalLink"]').type('https://ska.com.br/');
        cy.get('button').contains('span', 'Próximo').click();
        cy.get('button').contains('span', 'Finalizar e salvar').click();
        cy.confirmCreate();
        cy.existsRel(Cypress.env('rel_title'));
    });

    it('Editando relatorio externo', () => {
        cy.geren(Cypress.env('rel_title'));
        cy.get('img[class*="ic-edit-pen"]').click();
        cy.get('input[id="reportForm-name"]').clear().clear().type(Cypress.env('rel_title_edit_id'));
        cy.get('input[id="reportForm-caption"]').clear().type(Cypress.env('rel_title_edit'));
        cy.get('input[id="reportForm-externalLink"]').clear().type('https://www.alura.com.br/');
        cy.get('button').contains('span', 'Próximo').click();
        cy.get('button').contains('span', 'Finalizar e salvar').click();
        cy.saveEdExRel()
        cy.existsRel(Cypress.env('rel_title_edit'));
    });

    it('Excluindo relatorio externo', () => {
        cy.geren(Cypress.env('rel_title_edit'));
        cy.confirmDel();
        cy.wait(500);
        cy.NOTexistsRel(Cypress.env('rel_title_edit_id'))
    });
});