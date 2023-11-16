Feature: myOrb Login feature
    Through this feature medico's should able to login successfully

    @Login
    Scenario: As a doctor login with valid credentials 
    Given I am on the myOrb login page
    When I type my email as a username
    When I type my password
    Then I click sign In

    Scenario Outline: As a doctor I want to view the appointments 
    Given I am on appoinments page
    When I <filter> appoinments
    And I click details 
    Then I should able to see full summery of the appoinment

    Examples:
        | filter   | 
        | urgent   |
        | routine  |






