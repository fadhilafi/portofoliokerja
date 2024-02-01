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

def Last_Education(name)
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[7]/div/select').click
    sleep(2)
    educations = $driver.find_elements(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[7]/div/select/option')
    for i in educations do
        education = $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[7]/div/select/option').text
        if education == name
            education.click
        end
    end
    sleep(3)
end            

def Residence_Status()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[8]/div/select').click
    sleep(2)
    residences = $driver.find_elements(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[8]/div/select/option')
    for i in residences do
        residence = $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[8]/div/select/option').text
        if residence == name
            residence.click
        end
    end
    sleep(3)
end       