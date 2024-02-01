@Login
Feature: Login

@ValidLogin @smoke
Scenario: TC_1001 - User login valid Email and Password
    Given User open Populix homepage 1
    And User fill valid Email
    And User fill valid Password
    Then User succes logged in to Populix dashboard

@InvalidLogin @smoke
Scenario: TC_1002 - User login invalid Email and Password
    Given User open Populix homepage 2
    And User fill invalid Email
    And User fill invalid Password
    Then System should be show error notification Login failed with error message