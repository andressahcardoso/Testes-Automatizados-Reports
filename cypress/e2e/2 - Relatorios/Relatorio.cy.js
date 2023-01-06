describe('Testes em relatórios', () => {
   
    beforeEach(() => {
        cy.visit('/')
    });
    it('Criando um relatorio', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openOptions()
        cy.contains('span', 'Novo relatório').click();
        cy.selectDataset('Análise de Produção');
        cy.createRel('Cypress_01', 'Cypress - 01', 'Cypress - Testes Automatizados');
        cy.contains('span', 'Próximo').click({force: true});
        cy.contains('span', 'Próximo').click({force: true});
        cy.contains('span', ' Finalizar e salvar ').click({force: true});
        cy.confirmCreate();
    });

    it.only('Editando um relatorio', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.geren('Cypress - 01');
        cy.get('img[class*="ic-edit-pen"]').click();
        cy.wait(500);
        cy.contains('span', 'Próximo').click({force: true});
        cy.get('#mat-input-3').clear().type('Cypress_01_teste'); //Utilizado o Selector Playground​ do Cypress
        cy.get('#mat-input-4').clear({force: true}).type('Teste 1 - Cypress'); //Utilizado o Selector Playground​ do Cypress
        cy.get('input[data-placeholder="Grupo"]').clear().type('Cypress - Testes Automatizados');
        cy.get('span[class="mat-option-text"]').contains('Cypress - Testes Automatizados').click();
        cy.contains('span', 'Próximo').click({force: true});
        cy.get('input[id="mat-slide-toggle-4-input"]').uncheck({force: true});
        cy.contains('span', 'Próximo').click({force: true});
        cy.contains('span', ' Finalizar e salvar ').click({force: true});
        cy.saveEditRel()
    });
    
    it('Excluindo um relatorio', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.geren('Teste 1 - Cypress');
        cy.confirmDel();
    });

});