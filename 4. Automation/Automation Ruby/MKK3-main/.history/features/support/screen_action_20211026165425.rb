def LandingTitle()
    sleep(3)
    title_bar = $driver.find_element(:xpath, '//*[@text="Login"]').text
    log("Title Bar: {Login}")
end

def screenshot(name)
    $driver.save_screenshot("ss/#{name}.png")
    attach("ss/#{name}.png","image/png")
end
