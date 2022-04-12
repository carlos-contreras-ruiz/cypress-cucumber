Feature: Login to Application

    # As a valid user I want to login into Application

    Scenario: Valid login
        Given I open login page
        When I fill username with "username"
        And I fill password with "password"
        When I submit login
        Then I should see homepage

    @focus
    Scenario: Valid login 2
        Given I open login page
        When I fill username with "username"
        And I fill password with "password"
        And I see "Zero - Log in" in the title
        When I submit login
        And I want to wait 1000 milliseconds
        Then I should see homepage