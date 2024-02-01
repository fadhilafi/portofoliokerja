def Login_Privy()
    $driver.find_element(:xpath, '//button[@class="btn-login-privy"]').click
end

def Login_Lanjut()
    $driver.find_element(:xpath, '//button[@class="btn-login-next"]').click
end    