#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Login Challenge Web Wrong Password
  I want to do login for Challenge Web with wrong password

  @tag1
  Scenario Outline: Test Login with Invalid Credentials
    Given User navigated to login page
    When User enter username <username> and password <password>
    And Click on login button
    Then User is showed wrong password pop up message

    Examples: 
      |	username						|	password			|
      |	binarqae2@gmail.com	|	students12345	|