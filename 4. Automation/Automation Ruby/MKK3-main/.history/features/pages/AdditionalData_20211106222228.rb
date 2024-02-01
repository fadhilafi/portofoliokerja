def AddData_Screen()
    title9 = $driver.find_element(:xpath, '//div[@class="animated fadeIn"]/div/div[2]/div/div/div/p').text
    if title9 = "Data Tambahan"
        log("Data Tambahan screen true")
    end
    sleep(2)
end        

def Additional_Photo()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[8]/div/div[2]/fieldset/div/div/label/div[2]').click
    sleep(5)
    Capture_Pic2()
end

def Data_Name()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[8]/div/div[3]/fieldset/div/input').send_keys("Data Nama")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Data_Type(name)
    datas = $driver.find_elements(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[8]/div/div[4]/fieldset/div/select/option')
    datas.each { |data| data.click if data.text == name }
    sleep(2)
end  

def Data_Date()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[8]/div/div[5]/fieldset/div/div').click
    sleep(5)
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[8]/div/div[5]/fieldset/div/div/div[2]/div/span[20]').click
    sleep(3)
end
