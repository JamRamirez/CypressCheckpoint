class productPage{

    elements= {
        productTitle: () => cy.get('#text > h1:nth-child(2)'), 
        sizeList: () => cy.get('.sizes > .size'),
        firstSizeBtn: () => cy.get('.sizes > .size').first(),
        addToCartBtn: () =>  cy.get('.btn.btn-addtocart'),
        productAddedTxt: () => cy.get('.added-text'),
        removeProductBtn: () => cy.get("button[title='Remove from cart']")
    }

    getProductTitle(){
        return this.elements.productTitle()
    }

    getSizeList(){
        return this.elements.sizeList()
    }

    getFirstSizeBtn(){
        return this.elements.firstSizeBtn()
    }

    getAddToCartBtn(){
        return this.elements.addToCartBtn()
    }

    getProductAddedTxt(){
        return this.elements.productAddedTxt()
    }

    getRemoveProductBtn(){
        return this.elements.removeProductBtn()
    }

}

module.exports = new productPage();