def econ
    puts "Halaman Econ"
end
def nama_econ
    $session.find(:xpath,'//*[@id="emergency_contact_name"]').send_keys("nama econ")
    sleep(1)
    puts "nama econ"
end
def hubungan
    $session.find(:xpath,'//*[@id="emergency_contact_status_id"]').click
    sleep(1)
    puts "open opsi hubungan"
    $session.find(:xpath,'//*[@id="emergency_contact_status_id"]/option[12]').click
    sleep(1)
    puts "hubungan econ"
end
def hp_econ
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div/div/div/div[1]/div[1]/div').click
    sleep(1)
    puts "clicked"
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div/div/div/div[1]/div[1]/div/div[1]/input').send_keys("0877")
    sleep(1)
    puts "input 0877"
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div/div/div/div[1]/div[1]/div/div[2]/a').click
    sleep(1)
    puts "kode area econ"
    $session.find(:xpath,'//*[@id="emergency_contact_phone"]').send_keys("27734599")
    sleep(1)
    puts "nomor econ" 
end