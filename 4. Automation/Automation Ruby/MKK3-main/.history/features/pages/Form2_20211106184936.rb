def Form2_Screen()
    title3 = $driver.find_element(:xpath, '//div[@class="animated fadeIn"]/div/div[2]/div/div[2]/div/p').text
    if title3 = "Data Pekerjaan"
        log("Data Pekerjaan screen true")
    end
    sleep(2)
end        

def Company_Name()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[1]/div/input').send_keys("Wanokuni")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end  

def Code_Area()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[2]/div/div/div[1]/input').send_keys("0274")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Company_Phone()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[2]/div/div/div[2]/input').send_keys("242424")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Bussiness_Type()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[3]/div/input').send_keys("Tambang")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Position_Status()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[4]/div/input').send_keys("Pemilik")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Permanent_Employee()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[5]/div/div/div[1]/label').click
    sleep(2)
end    

def Temporary_Employee()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[5]/div/div/div[2]/label').click
    sleep(2)
end    

def Working_Since()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[6]/div/div').click
    sleep(3)
    $driver.find_element(:xpath, '//*[@id="__BVID__211"]/div/div/div[4]/header/span[1]').click
    sleep(3)
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[6]/div/div/div[4]/span[4]').click
    sleep(3)
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[6]/div/div/div[3]/span[5]').click
    sleep(3)
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[6]/div/div/div[2]/div/span[13]').click
    sleep(3)
end    

def Company_Address()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[7]/div/textarea').send_keys("Wano 7")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Province_Area(name)
    provinces = $driver.find_elements(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[8]/div/select/option')
    provinces.each { |province| province.click if province.text == name }
    sleep(2)
end    

def City_Area(name)
    cities = $driver.find_elements(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[9]/div/select/option')
    cities.each { |city| city.click if city.text == name }
    sleep(2)
end    

def Districts_Area(name)
    districts = $driver.find_elements(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[10]/div/select/option')
    districts.each { |district| district.click if district.text == name }
    sleep(2)
end    

def Subdistricts_Area(name)
    subdistricts = $driver.find_elements(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[11]/div/select/option[2]')
    subdistricts.each { |subdistrict| subdistrict.click if subdistrict.text == name }
    sleep(2)
end    

def Postal_Code()
    post_code = $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[2]/div/fieldset[12]/div')
    code = post_code.text
    if post_code.displayed? == true
        log(code)
    end    
    sleep(3)
end    