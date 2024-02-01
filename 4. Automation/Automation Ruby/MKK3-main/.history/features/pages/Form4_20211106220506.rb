def Form4_Screen()
    title5 = $driver.find_element(:xpath, '//div[@class="animated fadeIn"]/div/div[2]/div/div[2]/div/p').text
    if title5 = "Pengiriman & Billing"
        log("Pengiriman & Billing screen true")
    end
    sleep(2)
end        

def Shipping_Address1()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[1]/div/div/div[1]/label').click
    sleep(2)
end    

def Shipping_Address2()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[1]/div/div/div[2]/label').click
    sleep(2)
end    

def Billing_Method1()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[2]/div/div/div[1]/label').click
    sleep(2)
end    

def Billing_Method2()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[2]/div/div/div[2]/label').click
    sleep(2)
end    

def Account_Number()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[4]/div/input').send_keys("8765432123456")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    

def Payment_Method1()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[5]/div/div/div[1]/label').click
    sleep(2)
end    

def Payment_Method2()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[5]/div/div/div[1]/label').click
    sleep(2)
end    

def MPP_Yes()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[6]/div/div/div[1]/label').click
    sleep(2)
end    

def MPP_No()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[6]/div/div/div[2]/label').click
    sleep(2)
end    