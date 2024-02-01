def ajukan_button
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div/div/div/button').click
    sleep(2)
    puts "click Ajukan"    
end
def lanjutkan_button
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div[2]/div/div/div/div/div/button').click
    sleep(2)
    puts "click Lanjutkan"
end
def next_button
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div[2]/div/div/div/div/div/div[4]/div/div[2]').click
    sleep(2)
    puts "next page"
end
def next_button2
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div[2]/div/div/div/div/div/div/div/div[2]/button').click
    sleep(2)
    puts "next page"
end
def back_button
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div[2]/div/div/div/div/div/div[4]/div/div[1]').click
    sleep(2)
    puts "previous page"
end