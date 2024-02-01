def PowBill_Screen()
    title8 = $driver.find_element(:xpath, '//div[@class="animated fadeIn"]/div/div[2]/div/div/div/p').text
    if title8 = "Power Bill"
        log("Power Bill screen true")
    end
    sleep(2)
end        

def Power_Bill(name)
    bills = $driver.find_elements(:xpath, '//div[@class="wizard-navigation"]/div[2]/div[7]/div/div[2]/fieldset/div/select/option')
    bills.each { |bill| bill.click if bill.text == name }
    sleep(2)
end  