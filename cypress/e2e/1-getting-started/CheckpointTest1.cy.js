/// <reference types="cypress" />
import navbar from "../../pageObjects/navbar"
import loginpage from "../../pageObjects/loginpage"
import accountMainPage from "../../pageObjects/accountMainPage"
import mainPage from "../../pageObjects/mainPage"
import productPage from "../../pageObjects/productPage"
import shoppingCartPage from "../../pageObjects/shoppingCartPage"

describe('CheckpointTest1, Cypress', () => {
  beforeEach('should visit Gitnat Bicycles)', () => {
    cy.visit('https://www.giant-bicycles.com/us')
  })

  it('Login and Add and remove item from Product page', () => {

    navbar.getMyAccountBtn().should('have.text', 'My Account ').click()

    cy.url().should('contain','account').and('contain','login')
    cy.fixture('loginInfo.json').as('userData')
    cy.get('@userData').then((data => {
      loginpage.getEmailInput().should('have.id', 'Email').type(data.email)
      loginpage.getPassInput().should('have.id', 'Password').type(data.pass)
    }))
    loginpage.getLoginBtn().should('have.text', 'Log in ').click()


    cy.url().should('contain','account')
    accountMainPage.getAccountMainHeather().should('have.text', 'My orders')
    accountMainPage.getGiantLogo().click()

    cy.url().should('eq', 'https://www.giant-bicycles.com/us')

    var productTitle;
    mainPage.getFirstProductTitle().invoke('text').then(text => {
      if(text.includes(' ')){
        productTitle = text.split(' ')[0].toLowerCase()
      }else{
        productTitle = text.toLowerCase()
      }
      cy.log('TEXt: ', text)
      

      mainPage.getFirstProductTitle().click()

      cy.url().should('contain',productTitle)
      productPage.getFirstSizeBtn().click()
      productPage.getAddToCartBtn().click()
      productPage.getProductAddedTxt().should('contain', ' Added to cart')
      cy.get("button[title='Remove from cart']").click()
      productPage.getProductAddedTxt().should('not.exist')

    });

  })


  it('Login and Add multiple elements and check the cart popup', () => {

    navbar.getMyAccountBtn().should('have.text', 'My Account ').click()

    cy.url().should('contain','account').and('contain','login')
    cy.fixture('loginInfo.json').as('userData')
    cy.get('@userData').then((data => {
      loginpage.getEmailInput().should('have.id', 'Email').type(data.email)
      loginpage.getPassInput().should('have.id', 'Password').type(data.pass)
    }))
    loginpage.getLoginBtn().should('have.text', 'Log in ').click()


    cy.url().should('contain','account')
    accountMainPage.getAccountMainHeather().should('have.text', 'My orders')
    accountMainPage.getGiantLogo().click()

    cy.url().should('eq', 'https://www.giant-bicycles.com/us')

    var productTitle;
    mainPage.getFirstProductTitle().invoke('text').then(text => {
      if(text.includes(' ')){
        productTitle = text.split(' ')[0].toLowerCase()
      }else{
        productTitle = text.toLowerCase()
      }

      mainPage.getFirstProductTitle().click()
      cy.url().should('contain',productTitle)

      productPage.getSizeList().each((el, index, $list) => {

        let item = `.sizes > .size:nth-child(${index + 2})`
    
        cy.get(item).click()
        productPage.getAddToCartBtn().click()
        
        productPage.getProductAddedTxt().should('contain', ' Added to cart')


      })

      navbar.getCartButton().click()
      cy.get(".cart [role='dialog']").should('exist')

    });

  })


  it('Login and Add and direct to Cart Page', () => {

    navbar.getMyAccountBtn().should('have.text', 'My Account ').click()

    cy.url().should('contain','account').and('contain','login')
    cy.fixture('loginInfo.json').as('userData')
    cy.get('@userData').then((data => {
      loginpage.getEmailInput().should('have.id', 'Email').type(data.email)
      loginpage.getPassInput().should('have.id', 'Password').type(data.pass)
    }))
    loginpage.getLoginBtn().should('have.text', 'Log in ').click()


    cy.url().should('contain','account')
    accountMainPage.getAccountMainHeather().should('have.text', 'My orders')
    accountMainPage.getGiantLogo().click()

    cy.url().should('eq', 'https://www.giant-bicycles.com/us')

    var productTitle;
    mainPage.getFirstProductTitle().invoke('text').then(text => {
      if(text.includes(' ')){
        productTitle = text.split(' ')[0].toLowerCase()
      }else{
        productTitle = text.toLowerCase()
      }
      cy.log('TEXt: ', text)
      

      mainPage.getFirstProductTitle().click()

      cy.url().should('contain',productTitle)
      productPage.getFirstSizeBtn().click()
      productPage.getAddToCartBtn().click()
      productPage.getProductAddedTxt().should('contain', ' Added to cart')

      navbar.getCartButton().click()
      cy.get(".cart [role='dialog']").should('exist')

      cy.get('button#proceedToCheckoutButton').click()

      cy.url().should('contain', 'review').and('contain','shop')

      shoppingCartPage.getRemoveItemBtn().click()
      cy.get('div#cart-summary > div > p:nth-of-type(1)').should('have.text', 'Cart is empty')

    });

  })

  
 
})
