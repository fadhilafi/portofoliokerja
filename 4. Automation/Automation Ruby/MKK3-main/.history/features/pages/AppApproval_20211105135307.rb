def App_Approval()
    $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[6]/div/fieldset[3]/div/div/label').click
    sleep(2)
end    