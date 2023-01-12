describe('Testes em grupos de usuario', () => {
    
    beforeEach(() => {
        cy.visit('/');
        cy.login(Cypress.env('userName'), Cypress.env('password'));
    });

// TÁ COM PROBLEMA
    it('Criando um grupo de usuarios', () => {
        cy.openOptions()
        cy.contains('span', 'Novo grupo de usuários').click(); 
        cy.createUserG(Cypress.env('rel_title'), Cypress.env('rel_title_id'), Cypress.env('email'));
        cy.get('button').contains('span', 'Próximo').click();
        cy.get('mat-checkbox[id="mat-checkbox-8"]').click();
        cy.get('button').contains('span', 'Próximo').click({force: true});
        cy.get('button').contains('span', 'Próximo').click({force: true});
        cy.get('div[id="mat-tab-label-1-2"]').click(); 
        cy.get('button').contains('span', 'Finalizar e salvar').click();
        cy.wait(500)
        cy.confirmCreate();
        cy.existsGUs(Cypress.env('rel_title_id'))
    });

    it('Editando grupo de usuarios', () => {
        cy.GUsGeren2(Cypress.env('rel_title'));
        cy.contains('span', 'edit').click();
        cy.wait(500);
        cy.get('div[class="mat-slide-toggle-bar"]').click();
        cy.get('input[data-placeholder="Nome"]').clear().type(Cypress.env('rel_title_edit'));
        cy.get('input[data-placeholder="Descrição"]').clear().type(Cypress.env('rel_title_edit_id'));
        cy.get('input[data-placeholder="Email"]').clear().type(Cypress.env('email_edit'));
        cy.get('button').contains('span', 'Próximo').click();
        cy.get('button').contains('span', 'Próximo').click({force: true});
        cy.get('button').contains('span', 'Próximo').click({force: true});
        cy.get('button').contains('span', 'Finalizar e salvar').click();
        cy.saveEdExRel();
        cy.existsGUsEdit(Cypress.env('rel_title_edit_id'))
    });

    it.only('Excluindo grupo de usuarios', () => {
        cy.GUsGeren2(Cypress.env('rel_title_edit_id'));
        cy.confirmDel2()
    });
});

