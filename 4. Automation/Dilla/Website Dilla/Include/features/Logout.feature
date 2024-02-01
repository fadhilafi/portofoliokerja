@Logout
Feature: User want to logout from Secondhand Store website

  @LOTW001
  Scenario Outline: User want to logout SecondHand Store website
    Given I navigated to homepage Secondhand Store website
    When I click on profile icon
    And I click on logout button
    Then I successfull go to homepage