Feature: Login Suite
    As a user
    I want to be able to login to the application
    So that I can access my account

    @login @negative
    Scenario: Unsuccessful Login with invalid username and valid password
        Given I am on the login page
        When I enter an invalid username and valid password
        And I click the login button
        Then I should see an error message indicating invalid credentials
    
    @smoke @login @regression
    Scenario: Successful Login with valid username and password
        Given I am on the login page
        When I enter valid credentials
        And I click the login button
        Then I should be redirected to the dashboard

    @login @negative
    Scenario: Unsuccessful Login with valid username and invalid password
        Given I am on the login page
        When I enter a valid username and invalid password 
        And I click the login button
        Then I should see an error message indicating invalid credentials

    @login @negative
    Scenario: Unsuccessful Login with invalid username and invalid password
        Given I am on the login page
        When I enter an invalid username and invalid password 
        # data-table
        | username | password |
        | invalidUser | invalidPass |
        And I click the login button
        Then I should see an error message indicating invalid credentials

    @login @negative
    Scenario: Unsuccessful Login with empty username and password
        Given I am on the login page
        When I leave the username and password fields empty
        And I click the login button
        Then I should see an error message indicating that the fields are required 
