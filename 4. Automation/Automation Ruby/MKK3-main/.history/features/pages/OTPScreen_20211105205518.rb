def OTP_Button()
    $driver.find_element(:xpath, '//div[@class="otp-input"]/input[1]').send_keys("1")
    sleep(2)
    $driver.find_element(:xpath, '//div[@class="otp-input"]/input[2]').send_keys("2")
    sleep(2)
    $driver.find_element(:xpath, '//div[@class="otp-input"]/input[3]').send_keys("3")
    sleep(2)
    $driver.find_element(:xpath, '//div[@class="otp-input"]/input[4]').send_keys("4")
    sleep(2)
    $driver.find_element(:xpath, '//div[@class="otp-input"]/input[5]').send_keys("5")
    sleep(2)
end

def Verification_Button()
    $driver.find_element(:xpath, '//div[@class="modal-otp-footer"]/button').click
    sleep(5)
end    