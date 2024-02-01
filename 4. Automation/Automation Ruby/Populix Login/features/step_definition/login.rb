require 'selenium-webdriver' 
 
options = Selenium::WebDriver::Chrome::Options.new 
options.add_argument('--incognito') 
driver = Selenium::WebDriver.for:chrome,options:options 
 
 
#Scenario: TC_1001 - User login valid Email and Password 
Given("User open Populix homepage 1") do 
    driver.manage.window.maximize 
    driver.navigate.to 'https://www.info.populix.co/' 
    sleep(2) 
    driver.find_element(:xpath,'//*[@id="comp-k5dr6qy9"]/a/span').click 
    sleep(2) 
end 
And("User fill valid Email") do 
    valid_email = 'fadhilailmiyah@gmail.com' 
    driver.find_element(:id,'input_email').send_keys(valid_email) 
    sleep(2) 
end 
And("User fill valid Password") do 
    valid_pass = 'Adminfadhla1' 
    driver.find_element(:id,'input_password').send_keys(valid_pass) 
    sleep(2) 
    driver.find_element(:xpath,'//*[@id="submit_login"]/span[1]').click 
    sleep(5) 
end 
Then("User succes logged in to Populix dashboard") do 
    driver.find_element(:xpath,'//*[@id="dashboard"]/div[4]/div[2]/div') 
    sleep(2) 
end  
 
 
#Scenario: TC_1002 - User login invalid Email and Password 
Given("User open Populix homepage 2") do 
    driver.find_element(:xpath,'//*[@id="topnav-btn-avatar"]').click 
    sleep(2) 
    driver.find_element(:xpath,'//*[@id="app-navbar"]/div[3]/div[3]/div[2]/ul/li[4]/a').click 
    sleep(2) 
end 
And("User fill invalid Email") do 
    invalid_email = 'qa' 
    driver.find_element(:id,'input_email').send_keys(invalid_email) 
    sleep(2) 
end 
And("User fill invalid Password") do 
    valid_pass = 'engineer' 
    driver.find_element(:id,'input_password').send_keys(valid_pass) 
    sleep(2) 
    driver.find_element(:xpath,'//*[@id="submit_login"]/span[1]').click 
    sleep(2) 
end 
Then("System should be show error notification Login failed with error message") do 
    driver.find_element(:id,'input_email') 
    sleep(2) 
end