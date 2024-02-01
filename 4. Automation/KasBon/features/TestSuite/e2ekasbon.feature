@KasBone2e
Feature: e2e KasBon
Scenario: Verify end to end functionality test

   Given User Submit Channel Reguler
   And User Fill Page Data Utama
   And User Click Lanjutkan Button
   And User Fill Page Data Identitas
   And User Fill Page Payroll
   And User Fill Page Tujuan Pinjaman
   And User Fill Page Data Pekerjaan
   And User Fill Page Data Keluarga Tidak Serumah
   And User Fill Page Rekening Fasilitas Xtra KasBon
   And User Upload E-KTP
   And User Click Lanjutkan at Page Summary
   And User Click Lanjutkan at Page Persetujuan Nasabah
   And User Give Thick Mark At Page TnC, then Click Lanjutkan
   And User Input Valid OTP

   Given User Submit Channel Eform
   And User Fill Page Data Utama
   And User Click Lanjutkan Button
   And User Fill Page Data Identitas
   And User Fill Page Payroll
   And User Fill Page Tujuan Pinjaman
   And User Fill Page Data Pekerjaan
   And User Fill Page Data Keluarga Tidak Serumah
   And User Fill Page Rekening Fasilitas Xtra KasBon
   And User Upload E-KTP
   And User Click Lanjutkan at Page Summary
   And User Click Lanjutkan at Page Persetujuan Nasabah
   And User Give Thick Mark At Page TnC, then Click Lanjutkan
   And User Input Valid OTP

   Given User Submit Channel Staff
   And User Fill Page Data Utama
   And User Click Lanjutkan Button
   And User Fill Page Data Identitas
   And User Fill Page Payroll
   And User Fill Page Tujuan Pinjaman
   And User Fill Page Data Pekerjaan
   And User Fill Page Data Keluarga Tidak Serumah
   And User Fill Page Rekening Fasilitas Xtra KasBon
   And User Upload E-KTP
   And User Click Lanjutkan at Page Summary
   And User Click Lanjutkan at Page Persetujuan Nasabah
   And User Give Thick Mark At Page TnC, then Click Lanjutkan
   And User Input Valid OTP
   Then User Exit From Landing Form