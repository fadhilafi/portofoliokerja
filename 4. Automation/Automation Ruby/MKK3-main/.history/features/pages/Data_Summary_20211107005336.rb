def DataSum_Screen()
    title10 = $driver.find_element(:xpath, '//div[@class="landing card"]/div/div[2]/span').text
    if title10 = "Ringkasan Data"
        log("Ringkasan Data screen true")
    end
    sleep(2)
end        
    