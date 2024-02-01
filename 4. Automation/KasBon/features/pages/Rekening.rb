def halaman_rekening
    puts "Halaman Rekening"    
end
def atas_nama
    $session.find(:xpath,'//*[@id="atas_nama_rekening_cimb"]').send_keys("atas nama")
    sleep(1)
    puts "atas nama"   
end