describe('Testes em relatórios', () => {
   
    beforeEach(() => {
        cy.visit('/')
    });
    it('Criando um relatorio', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.openOptions()
        cy.contains('span', 'Novo relatório').click();
        cy.selectDataset('Análise de Produção');
        cy.createRel(Cypress.env('rel_title_id'), Cypress.env('rel_title'), Cypress.env('title'));
        cy.contains('span', 'Próximo').click({force: true});
        cy.contains('span', 'Próximo').click({force: true});
        cy.contains('span', ' Finalizar e salvar ').click({force: true});
        cy.confirmCreate();
        cy.existsRel(Cypress.env('rel_title'));
    });

    it('Editando um relatorio', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.geren(Cypress.env('rel_title'));
        cy.get('img[class*="ic-edit-pen"]').click();
        cy.wait(500);
        cy.contains('span', 'Próximo').click({force: true});
        cy.get('#mat-input-3').clear().type(Cypress.env('rel_title_edit_id')); //Utilizado o Selector Playground​ do Cypress
        cy.get('#mat-input-4').clear({force: true}).type(Cypress.env('rel_title_edit')); //Utilizado o Selector Playground​ do Cypress
        cy.get('input[data-placeholder="Grupo"]').clear().type(Cypress.env('title'));
        cy.get('span[class="mat-option-text"]').contains(Cypress.env('title')).click();
        cy.contains('span', 'Próximo').click({force: true});
        cy.get('input[id="mat-slide-toggle-4-input"]').uncheck({force: true});
        cy.contains('span', 'Próximo').click({force: true});
        cy.contains('span', ' Finalizar e salvar ').click({force: true});
        cy.saveEditRel();
        cy.existsRel(Cypress.env('rel_title_edit'));
    });
    
    it('Excluindo um relatorio', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.geren(Cypress.env('rel_title_edit'));
        cy.wait(500)
        cy.confirmDel();
        cy.wait(500);
        cy.NOTexistsRel(Cypress.env('rel_title_edit'))
    });

});