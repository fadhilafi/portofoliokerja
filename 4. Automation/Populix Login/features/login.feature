@Login
Feature: Login

@ValidLogin @smoke
Scenario: TC_1001 - User login valid Email and Password
    Given User open www.info.populix.co
    And User fill field Email
    And User fill field Password
    Then User navigates to dashboard www.populix.co/study

@InvalidLogin @smoke
Scenario: TC_1002 - User login invalid Email and Password
    Given User open www.info.populix.co
    User fill field Email with invalid email
    And User fill field Password
    System should be show error notification Login failed with error message

