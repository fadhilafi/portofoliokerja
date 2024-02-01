@Logout
Feature: Logout
  I want to Logout account

  @LogoutMobile
  Scenario Outline: Logout Account
    Given User already login
    When User click Keluar button
    Then Successfully logout
