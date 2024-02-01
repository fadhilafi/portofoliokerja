def screenshot(name)
    $driver.save_screenshot("ss/#{name}.png")
    attach("ss/#{name}.png","image/png")
end

And('Click upload document') do
    filename = 'PO_Testing.xlsx'
    file = File.join(Dir.pwd, filename)
    $driver.find_element(:id, 'file_upload').send_keys file
    sleep(15)
end