@MKK3E2E
Feature: E2E test
Scenario: Verify end to end functionality test

Given user go to web
And user click OK
And user click Lanjutkan
And user select card
And user fill Form 1
And user fill Form 2
And user fill Form 3
And user fill Form 4
Then user fill Data Usage Approval
And user fill App Approval field
And user fill Power Bill field
And user Add Additional Data
Then user agree on Data Summary
And user click on captcha field
Then user input OTP code 