def DataAppr_Screen()
    title6 = $driver.find_element(:xpath, '//div[@class="animated fadeIn"]/div/div[2]/div/div/div/p').text
    if title6 = "Persetujuan Penggunaan Data"
        log("Persetujuan Penggunaan Data screen true")
    end
    sleep(2)
end        

def Data_Approval1()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[5]/div/fieldset/div/div/div[1]/label').click
    sleep(2)
end    

def Data_Approval2()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[5]/div/fieldset/div/div/div[2]/label').click
    sleep(2)
end    