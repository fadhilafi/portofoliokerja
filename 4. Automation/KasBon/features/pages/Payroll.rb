def payroll
    puts "Halaman Payroll"
end
def akun_payroll
    $session.find(:xpath,'//*[@id="rekening_payroll"]').send_keys("003013003013")
    sleep(1)
    puts "akun payroll"
end
def gaji_bulanan
    $session.find(:xpath,'//*[@id="gaji_bulanan"]').send_keys("2000000")
    sleep(1)
    puts "gaji"
end
def tanggal_penggajian
    $session.find(:xpath,'//*[@id="tanggal_penggajian"]').click
    sleep(1)
    puts "open opsi tanggal gajian"
    $session.find(:xpath,'//*[@id="tanggal_penggajian"]/option[27]').click
    sleep(2)
    puts "tanggal 27"
end