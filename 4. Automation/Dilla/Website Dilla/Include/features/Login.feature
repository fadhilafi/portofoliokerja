@LoginTest 
Feature: User want to login in Secondhand Store website

  @LTW001
  Scenario Outline: Users want to login with email and password valid
    Given User navigate to homepage Secondhand Store website
    When User click on login button
    And User input email<email>
    And User input password<password>
    And User click on login buttons
    Then User successful login
      
    Examples: 
      | email                     | password 							 	|
      | annisadwi1999@gmail.com   | OZJwUcl/ZGSbAGjfTIQ6vw==|

  @LTW002
  Scenario Outline: Users want to login with correct email and incorrect password
    Given User navigate to homepage Secondhand Store website
    When User click on login button
    And User input email<email>
    And User input password<password>
    And User click on login buttons
    Then Popup "Your Password is Wrong" showup 
    
    Examples: 
      | email                     | password 										|
      | annisadwi1999@gmail.com   | 5Ed5CIkj9UQfaMZXAkDVaQ==		|