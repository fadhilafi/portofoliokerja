def Full_Name()
    $driver.find_element(:id, '__BVID__206').send_keys("Test Auto")
    sleep(2)
end    

def Ident_Number()
    $driver.find_element(:id, '__BVID__208').send_keys("34712312334340001")
    sleep(2)
end    

def Phone_Number()
    $driver.find_element(:id, '__BVID__210').send_keys("085912345678")
    sleep(2)
end    

def Email_Name()
    $driver.find_element(:id, '__BVID__212').send_keys("testauto111@gmail.com")
    sleep(2)
end    