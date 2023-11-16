/// <reference types = "cypress"/>
import{Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import { LoginPageEliments } from "../../../pageObjects/pageActions/LoginPageActions"

const login_Eliments = new LoginPageEliments


    Given('I am on the myOrb login page',() =>{
        cy.visit('https://myorb.com/login')
    })

    When('I type my email as a username',()=>{
        login_Eliments.email('testEmail')
    })

    When('I type my password',()=>{
       login_Eliments.password('testPassword')
  })

    Then('I click sign In', ()=>{
      login_Eliments.LoginButton()
    })




