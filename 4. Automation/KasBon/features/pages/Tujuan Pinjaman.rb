def tujuan_pinjaman
    puts "Pinjaman Yang Diajukan"
    $session.find(:xpath,'//*[@id="tujuan_peminjaman_id"]').click
    sleep(1)
    puts "open opsi tujuan pinjaman"
    $session.find(:xpath,'//*[@id="tujuan_peminjaman_id"]/option[2]').click
    sleep(1)
    puts "liburan"
end