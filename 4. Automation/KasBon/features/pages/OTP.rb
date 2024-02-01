def halaman_otp
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[1]/div[2]/div[2]/div/div[1]/input').send_keys('123456')
    sleep(2)
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div[1]/div[2]/div[2]/div/div[2]/button[2]').click
    sleep(2)
    puts "input OTP code"    
end