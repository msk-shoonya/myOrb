const loginElimentLocators = require ('../pageEliments/LoginPageEliments.json')

export class LoginPageActions {

    email(email){
        cy.get(loginElimentLocators.loginPageLocators.email_text).type(email)
        return
    }

    password(password){
        cy.get(loginElimentLocators.loginPageLocators.password_text).type(password)
        return
    }

    LoginButton(){
        cy.get(loginElimentLocators.loginPageLocators.login_Button).click()
        return
    }

}