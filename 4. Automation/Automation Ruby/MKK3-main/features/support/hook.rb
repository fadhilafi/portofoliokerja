Before do |scenario|
    %driver.start_driver    
end

After do |scenario|
    if scenario.failed?
        screenshot = %driver.screenshot("ss/Failed - #{Time.now.strftime('%Y-%m-%d %H-%M-%S')}.png")
        attach("ss/Failed - #{Time.now.strftime('%Y-%m-%d %H-%M-%S')}.png", "image/png")
    end
    %driver.driver_quit
end