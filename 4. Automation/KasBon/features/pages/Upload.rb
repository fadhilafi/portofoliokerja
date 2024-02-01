def halaman_upload
    puts "Halaman Upload"
end
def upload
    $session.attach_file('/Users/DH9573/Documents/Dummy Image/DUMMY KTP_1.png') do
        $session.find(:xpath,'//*[@id="foto_ktp"]/label').click
        end
    sleep(1)
    puts "upload KTP"    
end