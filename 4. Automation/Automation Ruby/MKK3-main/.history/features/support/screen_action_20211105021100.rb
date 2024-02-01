def screenshot(name)
    $driver.save_screenshot("ss/#{name}.png")
    attach("ss/#{name}.png","image/png")
end

def Next_Button()
    $driver.find_element(:xpath, '//div[@class="mt-4 mb-4"]/div/div[2]/button').click
    sleep(5)
end

def Back_Button()
    $driver.find_element(:xpath, '//div[@class="mt-4 mb-4"]/div/div[1]/button').click
    sleep(5)
end  

def Capture_Pic1()
    webview = $driver.available_contexts[1]
    $driver.set_context('NATIVE_APP')
    sleep(2)
    $driver.find_element(:xpath, "//*[@resource-id='com.android.packageinstaller:id/permission_allow_button']").click
    sleep(5)
    $driver.find_element(:id, 'com.android.camera2:id/shutter_button').click
    sleep(3)
    $driver.find_element(:xpath, '//*[@resource-id="com.android.camera2:id/done_button"]').click
    sleep(5)
    $driver.set_context(webview)
    sleep(5)
end    

def Capture_Pic2()
    webview = $driver.available_contexts[1]
    $driver.set_context('NATIVE_APP')
    sleep(5)
    $driver.find_element(:id, 'com.android.camera2:id/shutter_button').click
    sleep(3)
    $driver.find_element(:xpath, '//*[@resource-id="com.android.camera2:id/done_button"]').click
    sleep(5)
    $driver.set_context(webview)
    sleep(5)
end    