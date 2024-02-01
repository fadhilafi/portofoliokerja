def Shipping_Address1()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[1]/div/div/div[1]/label').click
    sleep(2)
end    

def Shipping_Address2()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[4]/div/fieldset[1]/div/div/div[2]/label').click
    sleep(2)
end    