@Login
Feature: Login as Binar4
  I want to Login to application using Binar4 Account

  @LoginPositive
  Scenario Outline: Login as Binar4 Account
    Given I launch Application
    When I click Akun button
    And I click Masuk button
    And I input username <username>
    And I input password <password>
    And I click Masuk button page
    Then I landing to the Homepage
    Examples:  
    | username             | password    |
    | studentqa4@binar.id  | studentQA4  |
    
  @LoginNegative
  Scenario Outline: Login as Binar4 Account
    Given I launch Application
    When I click Akun button
    And I click Masuk button
    And I input username <username>
    And I input password <password>
    And I click Masuk button page
    Then I landing to the Homepage
 
 Examples:
      | username             | password    |
      | studentqa4.binarr@id | studentQ4A  |