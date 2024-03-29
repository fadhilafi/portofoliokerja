require 'appium_lib'
require 'rubygems'
require 'rspec/expectations'
require 'selenium-webdriver'
require_relative '../support/screen_action.rb'
require_relative '../support/hook.rb'
require_relative '../pages/LandingPage.rb'
require_relative '../pages/Form1.rb'

include RSpec::Matchers


######################
#LOCAL

server_url = "http://0.0.0.0:4723/wd/hub",

capabilities = {
  caps:{
      deviceName: "emulator-5554",
      platformName: "Android",
      platformVersion: "12.0.0",
      automationName: "Appium",
      browserName: "Chrome",
      noReset: "false",
      autoGrantPermissions: "true"
      }
  }
  
#$driver = Selenium::WebDriver.for(:remote, :desired_capabilities => capabilities, :url => server_url)
#$driver = Appium::Driver.for(:remote, :desired_capabilities => capabilities, :url => server_url)
%driver = Appium::Driver.new(capabilities, true)
#@touch = Appium::TouchAction.new(@driver)
#Appium.promote_appium_methods Object
