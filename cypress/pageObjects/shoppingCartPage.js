class shoppingCartPage{

    elements = {
        removeItemBtn : () => cy.get('.hidden-xs > table#cart-table  .cartItem.ng-scope > .hidden-xs.remove > .btn-link.remove-cart-item')
    }

    getRemoveItemBtn(){
        return this.elements.removeItemBtn()
    }

}

module.exports = new shoppingCartPage();