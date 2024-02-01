require 'appium_lib'
require 'rubygems'
require 'rspec/expectations'
require 'selenium-webdriver'

include RSpec::Matchers


######################
#LOCAL

capabilities = {
  caps:{
      deviceName: "emulator-5554",
      platformName: "Android",
      platformVersion: "8.0.0",
      automationName: 'MKK3',
      browserName: 'Chrome',
      },
      appium_lib:{
          server_url: "http://0.0.0.0:4723/wd/hub",
          wait: 30
      }
  }

@driver = Appium::Driver.new(capabilities, true)
@touch = Appium::TouchAction.new(@driver)
Appium.promote_appium_methods Object

#capabilities = {
#  caps:{
#    deviceName: "Pixel_API_29",
#    deviceName: "5200bb58ee7f74fd",
#    automationName: "UiAutomator2",
#    platformName: "Android",
#    platformVersion: "9"
#    app: "/Users/noviantonugroho/Downloads/app-release.apk",
#    appPackage: "com.tapmobile"
#    appActivity: "com.tapmobile.MainActivity"
#    appWaitActivity: "*"
#  },
#    appium_lib:{
#        server_url: "http://localhost:4723/wd/hub",
#        wait: 30
#    }
#}


#@driver = Appium::Driver.new(capabilities, true)
#@touch = Appium::TouchAction.new(driver)
#Appium.promote_appium_methods Object


 ######################
 #CLOUD   
    
#    caps = {}
#    caps['browserstack.user'] = 'engineeringtech_70tIAz'
#    caps['browserstack.key'] = 'dmccXCiz9HWW9BJxyUUS'
#    caps['app'] = 'bs://01bc0245bf2ff93c8531db97df391e2916e2434f'
#    caps['device'] = 'Google Pixel 3'
#    caps['os_version'] = '9.0'
#    caps['project'] = 'TAP Mobile'
#    caps['build'] = 'Android'
#    caps['name'] = 'TAP'
#    caps['platformName'] = 'android'
#    driver = Appium::Driver.new({
#      'caps' => caps,
#      'appium_lib' => {
#        :server_url => "http://hub-cloud.browserstack.com/wd/hub"
#      }}, true)
#    touch = Appium::TouchAction.new(driver)
#    Appium.promote_appium_methods Object

    