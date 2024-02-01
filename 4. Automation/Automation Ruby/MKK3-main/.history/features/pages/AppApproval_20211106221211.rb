def AppAppr_Screen()
    title5 = $driver.find_element(:xpath, '//div[@class="animated fadeIn"]/div/div[2]/div/div/div/p').text
    if title5 = "Persetujuan"
        log("Persetujuan screen true")
    end
    sleep(2)
end        

def App_Approval()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[6]/div/fieldset[3]/div/div/label').click
    sleep(2)
end    