def data_utama
    puts "Page Data Utama"
end
def nomor_induk_kependudukan
    $session.find(:xpath,'//*[@id="nik"]').send_keys("3404040305930013")
    sleep(1)
    puts "NIK"
end
def nama_depan
    $session.find(:xpath,'//*[@id="nama_depan"]')
    if $session.current_url == "http://retailloan.dcidev.id/kasbon/form/ksbr"
        $session.find(:xpath,'//*[@id="nama_depan"]').send_keys('reguler')
        puts "reguler"
    elsif $session.current_url == "http://retailloan.dcidev.id/kasbon/form/ksbe"
        $session.find(:xpath,'//*[@id="nama_depan"]').send_keys('eform')
        puts "eform"
    else
        $session.find(:xpath,'//*[@id="nama_depan"]').send_keys('staff')
        puts "staff"
    end
    puts "nama depan"
end
def nama_tengah
    $session.find(:xpath,'//*[@id="nama_tengah"]').send_keys("non")
    sleep(1)
    puts "nama tengah"
end
def nama_belakang
    $session.find(:xpath,'//*[@id="nama_belakang"]').send_keys("blast")
    sleep(1)
    puts "nama belakang"
end
def scroll
    $session.execute_script("window.scrollBy(0,document.body.scrollHeight)")
    sleep(2)
    puts "scrolled"
end
def tanggal_lahir
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div[2]/div/div/div/div/div/div/div[1]').click
    sleep(1)
    puts "open date picker"
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div[2]/div/div/div/div/div/div/div[4]/header/span[1]').click
    sleep(1)
    puts "prev year"
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div/div/div/div/div[4]/span[4]').click
    sleep(1)
    puts "1993"
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div[2]/div/div/div/div/div/div/div[3]/span[5]').click
    sleep(1)
    puts "mei"
    $session.find(:xpath,'//*[@id="app"]/div/main/div/div/div[2]/div/div/div/div/div/div/div[2]/div/span[16]').click
    sleep(1)
    puts "3"
    puts "3/5/1993"
end
def tempat_lahir
    $session.find(:xpath,'//*[@id="tempat_lahir_sesuai_identitas"]').send_keys("kasur")
    sleep(1)
    puts "tempat lahir"
end