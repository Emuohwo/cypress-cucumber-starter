class LoginPage {
    constructor() {
        this.usernameInput = 'input[name="username"]'
        this.passwordInput = 'input[name="password"]'
        this.loginButton = 'button[type="submit"]'
    }

    getUsernameInput() {
        return cy.get(this.usernameInput)
    }

    getPasswordInput() {
        return cy.get(this.passwordInput)
    }

    getLoginButton() {
        return cy.get(this.loginButton)
    }

}

export default LoginPage;