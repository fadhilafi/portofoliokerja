require 'appium_lib'
require 'rubygems'
require 'rspec/expectations'
require 'selenium-webdriver'
require_relative '../support/screen_action.rb'
require_relative '../support/hook.rb'
require_relative '../pages/LandingPage.rb'

include RSpec::Matchers


######################
#LOCAL

capabilities = {
  caps:{
      deviceName: "emulator-5554",
      platformName: "Android",
      platformVersion: "8.0.0",
      automationName: "MKK3",
      browserName: "Chrome"
      },
      appium_lib:{
          server_url: "http://0.0.0.0:4723/wd/hub",
          wait: 30
      }
  }

@driver = Appium::Driver.new(capabilities, true)
@touch = Appium::TouchAction.new(@driver)
Appium.promote_appium_methods Object
