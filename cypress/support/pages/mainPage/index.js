const el = require ('./elementos').ELEMENTS;

class addProduto {
    navegaSite(){        
        cy.visit('/');
    };

    procAddProduto() {
        cy.get(el.campo_busca).type('Faded Short Sleeve');
        cy.get(el.botao_campo_busca).click();
        cy.get(el.botao_add_prod).click();
    }

    verificaShopCart() {
        cy.get(el.shop_confirma).should('be.visible');    
        cy.get(el.shop_confirma).contains('There is 1 item in your cart.');  
    } 

}

export default new addProduto();