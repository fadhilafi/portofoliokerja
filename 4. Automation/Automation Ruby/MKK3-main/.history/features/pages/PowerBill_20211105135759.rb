def Power_Bill(name)
    bills = $driver.find_element(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[7]/div/div[2]/fieldset/div/select/option')
    bills.each { |bill| bill.click if bill.text == name }
    sleep(2)
end  