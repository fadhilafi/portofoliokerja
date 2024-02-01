def getTitleHome()
    sleep(1)
    title_bar = $driver.find_element(:xpath, '//*[@text="Login"]').text
    log("Title Bar: {Login}")
end

def username(string)
    $driver.find_element(:xpath, '//android.widget.EditText[@text="Email"]').click()
    $driver.find_element(:xpath, '//android.widget.EditText[@text="Email"]').send_keys(string)
end    

def password(string)
    $driver.find_element(:xpath, '//android.widget.EditText[@text="Password"]').click()
    $driver.find_element(:xpath, '//android.widget.EditText[@text="Password"]').send_keys(string)
end 

def log_in()
    $driver.find_element(:xpath, '//*[@text="Sign In"]').click
    #button = $driver.find_element(:class=>"android.view.ViewGroup")
    #button2 = button.text.include? "Sign In"
    #button2.click
end

def screenshot(name)
    $driver.save_screenshot("ss/#{name}.png")
    attach("ss/#{name}.png","image/png")
end
