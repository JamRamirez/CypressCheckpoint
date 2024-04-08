class loginPage{

    elements = {
        emailInput: () => cy.get('input#Email'),
        passInput: () => cy.get("input#Password"),
        loginBtn: () => cy.get("button#btnLogin")
    }

    getEmailInput(){
        return this.elements.emailInput()
    }

    getPassInput(){
        return this.elements.passInput()
    }

    getLoginBtn(){
        return this.elements.loginBtn()
    }
}

module.exports = new loginPage();