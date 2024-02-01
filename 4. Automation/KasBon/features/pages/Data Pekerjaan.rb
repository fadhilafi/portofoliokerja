def halaman_pekerjaan
    puts "Halaman Pekerjaan"
end
def jenis_pekerjaan
    $session.find(:xpath,'//*[@id="jenis_pekerjaan_id"]').click
    sleep(1)
    puts "open opsi jenis pekerjaan"
    $session.find(:xpath,'//*[@id="jenis_pekerjaan_id"]/option[2]').click
    sleep(1)
    puts "karyawan"
end
def status_pekerjaan
    $session.find(:xpath,'//*[@id="status_pekerjaan_id"]').click
    sleep(1)
    puts "open opsi status pekerjaan"
    $session.find(:xpath,'//*[@id="status_pekerjaan_id"]/option[3]').click
    sleep(1)
    puts "karyawan tetap"
end
def nama_perusahaan
    $session.find(:xpath,'//*[@id="nama_perusahaan"]').send_keys("namanya juga usaha")
    sleep(1)
    puts "nama usaha"
end
def bidang_usaha
    $session.find(:xpath,'//*[@id="bidang_usaha_id"]').click
    sleep(1)
    puts "open opsi bidang usaha"
    $session.find(:xpath,'//*[@id="bidang_usaha_id"]/option[10]').click
    sleep(1)
    puts "Jasa"
end
def departement
    $session.find(:xpath,'//*[@id="office_department"]').send_keys("bagian")
    sleep(1)
    puts "Departement"
end
def lama_bekerja
    $session.execute_script("window.scrollBy(0,676)")
    sleep(2)
    $session.find(:xpath,'//*[@id="lama_bekerja_tahun"]').click
    sleep(1)
    puts "open opsi tahun"
    $session.find(:xpath,'//*[@id="lama_bekerja_tahun"]/option[2]').click
    sleep(1)
    puts "tahun kerja"
    $session.find(:xpath,'//*[@id="lama_bekerja_bulan"]').click
    sleep(1)
    puts "open opsi bulan"
    $session.find(:xpath,'//*[@id="lama_bekerja_bulan"]/option[4]').click
    sleep(1)
    puts "bulan kerja"
end
def nip
    if $session.has_selector?("input[id='nip'][disabled='disabled']")
    puts "NIP Disabled"
    else
    $session.find(:xpath,'//*[@id="nip"]').send_keys("13")
    puts "NIP 13"
    end
      sleep(2)
end
def alamat_kantor
    $session.find(:xpath,'//*[@id="office_address"]').send_keys("alamat kantor")
    sleep(1)
    puts "alamat kantor"
end
def kode_pos_kantor
    $session.find(:xpath,'//*[@id="office_kodepos"]').send_keys("55584")
    sleep(2)
    puts "kode POS kantor"
end
def telepon_kantor
    $session.execute_script("window.scrollBy(0,683)")
    sleep(2)
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div/div/div/div[2]/div[1]/div').click
    sleep(1)
    puts "clicked"
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div/div/div/div[2]/div[1]/div/div[1]/input').send_keys("0274")
    sleep(1)
    puts "input 0274"
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div/div/div/div[2]/div[1]/div/div[2]/a').click
    sleep(1)
    puts "kode area telpon kantor"
    $session.find(:xpath,'//*[@id="office_phone"]').send_keys("333013")
    sleep(1)
    puts "nomor kantor"
end