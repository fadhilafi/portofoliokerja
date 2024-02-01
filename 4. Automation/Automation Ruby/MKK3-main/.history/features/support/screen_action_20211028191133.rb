def screenshot(name)
    $driver.save_screenshot("ss/#{name}.png")
    attach("ss/#{name}.png","image/png")
end

def Next_Button()
    $driver.find_element(:xpath, '//div[@class="mt-4 mb-4"]/div/div[2]/button').click
    sleep(5)
end

def Back_Button()
    $driver.find_element(:xpath, '//div[@class="mt-4 mb-4"]/div/div[1]/button').click
    sleep(5)
end    