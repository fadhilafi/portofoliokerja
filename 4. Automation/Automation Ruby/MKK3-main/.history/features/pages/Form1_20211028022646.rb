def User_Name()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[1]/div/input').send_keys("Test Auto")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Ident_Number()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[2]/div/input').send_keys("34712312334340001")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Phone_Number()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[3]/div/input').send_keys("085912345678")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Email_Name()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[4]/div/input').send_keys("testauto111@gmail.com")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Self_Pic()
    filename = 'dian1.jpg'
    file = File.join(Dir.pwd, filename)
    $driver.find_element(:xpath, '//div[@class="form-container-wrapper auto-height"]/div/div/div[2]/div[2]/div[1]/div[1]/fieldset[6]/div/div/label/div[1]/input').send_keys file
    sleep(10)
end

def Ektp_Pic()
    filename = 'ktp-test.jpeg'
    file = File.join(Dir.pwd, filename)
    $driver.find_element(:xpath, '//div[@class="form-container-wrapper auto-height"]/div/div/div[2]/div[2]/div[1]/div[1]/fieldset[5]/div/div/label/div[1]/input').send_keys file
    sleep(10)
end

def Npwp_Pic()
    filename = 'npwp-test.jpeg'
    file = File.join(Dir.pwd, filename)
    $driver.find_element(:xpath, '//div[@class="form-container-wrapper auto-height"]/div/div/div[2]/div[2]/div[1]/div[1]/fieldset[14]/div/div/label/div[1]/input').send_keys file
    sleep(10)
end

