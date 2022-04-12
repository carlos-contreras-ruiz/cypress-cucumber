import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait {int} milliseconds', (time) => {
	cy.wait(time)
})

defineStep('I see {string} in the title', (value) => {
	cy.title().should('include', value)
})
