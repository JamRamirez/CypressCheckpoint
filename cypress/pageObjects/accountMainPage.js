class accountMainPage{

    elements =  {
        accountHeader: () => cy.get("[class] .text-uppercase:nth-child(2)"),
        accountProfileBtn: () => cy.get("[href='\/us\/account\/profile']"),
        giantLogo: () => cy.get("[title='Giant']")
    }

    getAccountMainHeather(){
        return this.elements.accountHeader()
    }
    
    getAccProfileBtn(){
        return this.elements.accountProfileBtn()
    }

    getGiantLogo(){
        return this.elements.giantLogo()
    }

}

module.exports = new accountMainPage();