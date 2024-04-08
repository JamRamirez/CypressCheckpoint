class navbarPage{

    elements =  {
        myAccountBtn: () => cy.get("#login [data-ga4_name]"),
        cartbutton: () => cy.get('.glyphicon.glyphicon-shopping-cart')

    }

    getMyAccountBtn(){
        return this.elements.myAccountBtn()
    }

    getCartButton(){
        return this.elements.cartbutton()
    }

}

module.exports = new navbarPage();