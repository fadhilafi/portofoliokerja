require_relative '../support/screen_action.rb'
require_relative '../support/hook.rb'
require_relative '../pages/LandingPage.rb'


Given('user go to web') do
  Landing_Page()
  sleep(5)
end

Given('user click OK') do
  pending # Write code here that turns the phrase above into concrete actions
end