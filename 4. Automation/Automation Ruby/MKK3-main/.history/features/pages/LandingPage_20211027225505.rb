def Landing_Page()
    $driver.navigate.to "https://mkk3.dcidev.id/mandiri"
end 

def LandingTitle()
    sleep(3)
    title_bar = $driver.find_element(:xpath, '//div[@class="disclaimer-header-card"]').text
    if title_bar == "Disclaimer"
        log("Landing success")
    end    
end