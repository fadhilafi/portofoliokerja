def User_Name()
    $driver.find_element(:xpath, '//div[@class="wizard-tab-content"]/div[1]/div/fieldset[1]/div/input').send_keys("Test Auto")
    sleep(2)
    $driver.hide_keyboard
    sleep(2)
end    