describe('Testes em relatórios', () => {
   
    beforeEach(() => {
        cy.visit('/')
    });
    it('Criando um relatorio', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.get('img[src="assets/icons/ic_add_circle.svg"]').click();
        cy.contains('span', 'Novo relatório').click();
        cy.get('input[id="mat-input-9"]').type('Análise de Produção');
        cy.get('div[class="mat-body-strong"]').contains('0').click();
        cy.contains('span', 'Próximo').click();
        cy.get('#mat-input-2').type('Cypress_01'); //Utilizado o Selector Playground​ do Cypress
        cy.get('#mat-input-3').type('Cypress - 01'); //Utilizado o Selector Playground​ do Cypress
        cy.get('input[data-placeholder="Grupo"]').type('Cypress - Testes Automatizados');
        cy.get('span[class="mat-option-text"]').contains('Cypress - Testes Automatizados').click();
        cy.contains('span', 'Próximo').click({force: true});
        cy.contains('span', 'Próximo').click({force: true});
        cy.contains('span', ' Finalizar e salvar ').click({force: true});
        cy.confirmCreate();
    });

    it('Editando um relatorio', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.geren('Cypress - 01');
        cy.get('img[class*="ic-edit-pen"]').click();
        cy.contains('span', 'Próximo').click({force: true});
        cy.get('#mat-input-3').clear().type('Cypress_01_teste'); //Utilizado o Selector Playground​ do Cypress
        cy.get('#mat-input-4').clear({force: true}).type('Teste 1 - Cypress'); //Utilizado o Selector Playground​ do Cypress
        cy.get('input[data-placeholder="Grupo"]').clear().type('Cypress - Testes Automatizados');
        cy.get('span[class="mat-option-text"]').contains('Cypress - Testes Automatizados').click();
        cy.contains('span', 'Próximo').click({force: true});
        cy.get('input[id="mat-slide-toggle-4-input"]').uncheck({force: true});
        cy.contains('span', 'Próximo').click({force: true});
        cy.contains('span', ' Finalizar e salvar ').click({force: true});
        cy.contains('h1', 'Salvar edição').should('be.visible');
        cy.contains('span', 'Sim').click({force: true});
        cy.contains('h1', 'Salvar').should('be.visible');
        cy.contains('span', 'Ok').click({force: true});
    });
    
    it('Excluindo um relatorio', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.geren('Teste 1 - Cypress');
        cy.confirmDel();
    });

});