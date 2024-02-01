def data_identitas
    puts "Page Data Identitas"
end
def jenis_kelamin
    $session.find(:xpath,'//*[@id="jenis_kelamin_id"]')
    sleep(1)
    puts "jenis kelamin"
    $session.find(:xpath,'//*[@id="jenis_kelamin_id"]/option[2]').click
    sleep(1)
    puts "lakilaki"
end
def nama_gadis_ibu_kandung
    $session.find(:xpath,'//*[@id="nama_gadis_ibu_kandung"]').send_keys("Nama Gadis Ibu Kandung")
    sleep(1)
    puts "Nama Gadis Ibu Kandung"
end
def nomor_handphone
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div/div/div/div[1]/div[1]/div').click
    sleep(1)
    puts "clicked"
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div/div/div/div[1]/div[1]/div/div[1]/input').send_keys("0877")
    sleep(1)
    puts "send 0877"
    $session.find(:xpath,'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div/div/div/div[1]/div[1]/div/div[2]/a/div[2]').click
    sleep(1)
    puts "Kode Area"
    $session.find(:xpath,'//*[@id="nomor_handphone"]').send_keys("27734599")
    sleep(1)
    puts "nomor HP"
end
def alamat_email
    $session.find(:xpath,'//*[@id="alamat_email"]').send_keys("alamat@email.com")
    sleep(1)
    puts "alamat email"
end
def kewarganegaraan
    $session.find(:xpath,'//*[@id="kewarganegaraan_id"]').click
    sleep(1)
    puts "open opsi kewarganegaraan"
    $session.find(:xpath,'//*[@id="kewarganegaraan_id"]/option[1]').click
    sleep(1)
    puts "WARGA NEGARA INDONESIA"
end
def negara_lahir
    $session.find(:xpath,'//*[@id="negara_lahir_id"]').click
    sleep(1)
    puts "open opsi negara lahir"
    $session.find(:xpath,'//*[@id="negara_lahir_id"]/option[1]').click
    sleep(1)
    puts "Indonesia"
end
def status_perkawinan
    $session.find(:xpath,'//*[@id="status_perkawinan_id"]').click
    sleep(1)
    puts "open opsi status perkawinan"
    $session.find(:xpath,'//*[@id="status_perkawinan_id"]/option[3]').click
    sleep(1)
    puts "Belum Kawin"
end
def jumlah_tanggungan_pemohon
    $session.find(:xpath,'//*[@id="jumlah_tanggungan_pemohon"]').send_keys("0")
    sleep(1)
    puts "jumlah tanggungan 0"
end
def provinsi_lahir
    $session.find(:xpath,'//*[@id="provinsi_lahir_id"]').click
    sleep(1)
    puts "open opsi provinsi lahir"
    $session.find(:xpath,'//*[@id="provinsi_lahir_id"]/option[7]').click
    sleep(1)
    puts "DKI jakarta"
end
def kota_lahir
    $session.find(:xpath,'//*[@id="kota_lahir_id"]').click
    sleep(1)
    puts "open opsi kota lahir"
    $session.find(:xpath,'//*[@id="kota_lahir_id"]/option[2]').click
    sleep(1)
    puts "Jakarta pusat"
end
def alamat_identitas
    $session.find(:xpath,'//*[@id="alamat_identitas"]').send_keys("alamat identitas")
    sleep(1)
    puts "Alamat identitas"
end
def rt_identitas
    $session.find(:xpath,'//*[@id="rt_identitas"]').send_keys("3")
    sleep(1)
    puts "RT 3"
end
def rw_identitas
    $session.find(:xpath,'//*[@id="rw_identitas"]').send_keys("13")
    sleep(1)
    puts "RW 13"
end
def kode_pos
    $session.find(:xpath,'//*[@id="kodepos_identitas"]').send_keys("55582")
    sleep(1)
    puts "kode POS"
end