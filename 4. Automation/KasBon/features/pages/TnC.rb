def halaman_TnC
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div[2]/div/div/div/div/div/div[2]/label').click
    sleep(2)
    puts "TnC"
end
