const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'

class LoginPage {
	//Visit page
	static visitLoginPAge() {
		cy.visit(URL)
	}
	//fill username
	static fillUsernaem(name) {
		cy.get(USERNAME).type(name)
	}
	//fill password
	static fillPassword(pass) {
		cy.get(PASSWORD).type(pass)
	}
	//submit form
	static submit() {
		cy.get(SUBMIT_BUTTON).click()
	}
}

export default LoginPage
