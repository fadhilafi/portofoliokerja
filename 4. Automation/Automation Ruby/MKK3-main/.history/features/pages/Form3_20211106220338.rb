def Form3_Screen()
    title4 = $driver.find_element(:xpath, '//div[@class="animated fadeIn"]/div/div[2]/div/div[2]/div/p').text
    if title4 = "Data Keluarga Dekat"
        log("Data Keluarga screen true")
    end
    sleep(2)
end        

def Family_Name()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[3]/div/fieldset[1]/div/input').send_keys("Nama saya")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end  

def Family_Relation(name)
    families = $driver.find_elements(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[3]/div/fieldset[2]/div/select/option')
    families.each { |family| family.click if family.text == name }
    sleep(2)
end  

def Family_Phone()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[3]/div/fieldset[3]/div/input').send_keys("081200112233")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end  