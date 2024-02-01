require_relative '../support/buttons.rb'
require_relative '../pages/channel KasBon.rb'

Given('User Submit Channel Reguler') do
  channel_reguler()
  sleep(2)
  ajukan_button()
end
Given('User Submit Channel Eform') do
  channel_eform()
  sleep(2)
  ajukan_button()
end
Given('User Submit Channel Staff') do
  channel_staff()
  sleep(2)
  ajukan_button()
end
And('User Fill Page Data Utama') do
  data_utama()
  nomor_induk_kependudukan()
  nama_depan()
  nama_tengah()
  nama_belakang()
  scroll()
  tanggal_lahir()
  tempat_lahir()
end
And('User Click Lanjutkan Button') do
  lanjutkan_button()
end
And('User Fill Page Data Identitas') do
  data_identitas()
  jenis_kelamin()
  nama_gadis_ibu_kandung()
  nomor_handphone()
  alamat_email()
  kewarganegaraan()
  negara_lahir()
  status_perkawinan()
  jumlah_tanggungan_pemohon()
  provinsi_lahir()
  kota_lahir()
  alamat_identitas()
  rt_identitas()
  rw_identitas()
  kode_pos()
  scroll()
  next_button()
end
And('User Fill Page Payroll') do
  payroll()
  akun_payroll()
  gaji_bulanan()
  tanggal_penggajian()
  next_button2()
end
And('User Fill Page Tujuan Pinjaman') do
  tujuan_pinjaman()
  next_button2()
end
And('User Fill Page Data Pekerjaan') do
  halaman_pekerjaan()
  jenis_pekerjaan()
  status_pekerjaan()
  nama_perusahaan()
  bidang_usaha()
  departement()
  lama_bekerja()
  nip()
  alamat_kantor()
  kode_pos_kantor()
  telepon_kantor()
  next_button2()
end
And('User Fill Page Data Keluarga Tidak Serumah') do
  econ()
  nama_econ()
  hubungan()
  hp_econ()
  next_button2()
end
And('User Fill Page Rekening Fasilitas Xtra KasBon') do
  halaman_rekening()
  atas_nama()
  next_button2()
end
And('User Upload E-KTP') do
  halaman_upload()
  upload()
  next_button2()
end
And('User Click Lanjutkan at Page Summary') do
  scroll()
  next_button2()
end
And('User Click Lanjutkan at Page Persetujuan Nasabah') do
  scroll()
  next_button2()
end
And('User Give Thick Mark At Page TnC, then Click Lanjutkan') do
  scroll()
  halaman_TnC()
  next_button2()
end
And('User Input Valid OTP') do
  halaman_otp()
end
Then('User Exit From Landing Form') do
  close_form()
end