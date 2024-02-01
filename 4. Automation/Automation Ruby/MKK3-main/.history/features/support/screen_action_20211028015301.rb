def screenshot(name)
    $driver.save_screenshot("ss/#{name}.png")
    attach("ss/#{name}.png","image/png")
end

