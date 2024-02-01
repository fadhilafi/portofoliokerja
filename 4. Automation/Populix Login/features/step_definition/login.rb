require 'selenium-webdriver'

options = Selenium::WebDriver::Chrome::Options.new
options.add_argument('--maximize')
options.add_argument('--incognito')
driver = Selenium::WebDriver.for:chrome,options:options

#Scenario: TC_1001 - User login valid Email and Password
Given("User open www.info.populix.co") do
    driver.navigate.to 'ttps://www.info.populix.co/'
    sleep(2)
    driver.find_element(:xpath,'//*[@id="comp-k5dr6qy9"]/a/span').click
    sleep(2)
end

And("User fill field Email") do
    valid_email = 'fadhilailmiyah@gmail.com'
    driver.find_element(:id,'input_email').send_keys(valid_email)
    sleep(2)
end
And("User fill field Password") do
    valid_pass = 'Adminfadhla1'
    driver.find_element(:id,'input_password').send_keys(valid_pass)
    sleep(2)
    driver.find_element(:xpath,'//*[@id="submit_login"]/span[1]').click
    sleep(2)
end
Then("User navigates to dashboard www.populix.co/study") do
    driver.navigate.to 'https://www.populix.co/study'
    sleep(2)
end 


#Scenario: TC_1002 - User login invalid Email and Password
Given("User open www.info.populix.co") do
    driver.navigate.to 'ttps://www.info.populix.co/'
    sleep(2)
    driver.find_element(:xpath,'//*[@id="comp-k5dr6qy9"]/a/span').click
    sleep(2)
end

And("User fill field Email with invalid email") do
    invalid_email = 'qa'
    driver.find_element(:id,'input_email').send_keys(invalid_email)
    sleep(2)
end
And("User fill field Password") do
    valid_pass = 'engineer'
    driver.find_element(:id,'input_password').send_keys(valid_pass)
    sleep(2)
    driver.find_element(:xpath,'//*[@id="submit_login"]/span[1]').click
    sleep(2)
end
Then("System should be show error notification Login failed with error message") do
    driver.find_element(:class,'input_email')
    driver.find_element(:xpath,"//*[@id="input_email"]")
    sleep(2)
end 


