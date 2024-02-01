def Data_Approval1()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[5]/div/fieldset/div/div/div[1]/label').click
    sleep(2)
end    

def Data_Approval2()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[5]/div/fieldset/div/div/div[2]/label').click
    sleep(2)
end    