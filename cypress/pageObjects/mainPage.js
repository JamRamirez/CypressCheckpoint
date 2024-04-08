class mainPage{

    elements = {
        productsContainer: () => cy.get('#productsContainer'),
        firstProductTitle: () => cy.get('div#productsContainer > div > div:nth-of-type(1) > div:nth-of-type(1) .h3')
    }

    getProductsCountainer(){
        return this.elements.productsContainer()
    }

    getFirstProductTitle(){
        return this.elements.firstProductTitle()
    }
}

module.exports = new mainPage();