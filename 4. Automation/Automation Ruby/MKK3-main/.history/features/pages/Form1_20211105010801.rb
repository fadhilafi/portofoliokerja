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

def ID_Card()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[5]/div/div/label/div[2]').click
    sleep(2)
    $driver.switchTo().alert().accept();
    sleep(2)
    $driver.key_event(27)
    #$driver.find_element(:id, 'com.android.camera2:id/shutter_button').click
    sleep(3)
    $driver.find_element(:xpath, '//*[@resource-id="com.android.camera2:id/done_button"]').click
    #sleep(3)
    #$driver.context("CHROMIUM")
    sleep(5)
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
    educations.each { |education| education.click if education.text == name }
    sleep(5)
end            

def Residence_Status(name)
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[8]/div/select').location_once_scrolled_into_view
    sleep(2)
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[8]/div/select').click
    sleep(2)
    residences = $driver.find_elements(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[8]/div/select/option')
    residences.each { |residence| residence.click if residence.text == name }
    sleep(5)
end 

def Dependent_Number()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[9]/div/input').location_once_scrolled_into_view
    sleep(3)
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[9]/div/input').send_keys("0")
    sleep(3)
    $driver.hide_keyboard
    sleep(3)
end 

def Home_Phone()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[10]/div/input').location_once_scrolled_into_view
    sleep(3)
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[10]/div/input').send_keys("0274123456")
    sleep(3)
    $driver.hide_keyboard
    sleep(3)
end

def Mother_Name()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[11]/div/input').location_once_scrolled_into_view
    sleep(3)
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[11]/div/input').send_keys("Ibu Kandung")
    sleep(3)
    $driver.hide_keyboard
    sleep(3)
end    

def CurrentAddress_Yes()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[12]/div/div/div[1]/label').click
    sleep(3)
end    

def CurrentAddress_No()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[12]/div/div/div[2]/label').click
    sleep(3)
end    

def Work_Type(name)
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[13]/div/select').location_once_scrolled_into_view
    sleep(3)
    works = $driver.find_elements(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[13]/div/select/option')
    works.each { |work| work.click if work.text == name }
    sleep(3)
end  

def Monthly_Income()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[14]/div/input').send_keys("10000000")
    sleep(3)
    $driver.hide_keyboard
    sleep(3)
end    
