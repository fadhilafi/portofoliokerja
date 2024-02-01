require_relative '../support/screen_action.rb'
require_relative '../support/hook.rb'
require_relative '../pages/LandingPage.rb'


Given('user go to web') do
  Landing_Page()
  sleep(5)
  LandingTitle()
  sleep(2)
end

And('user click OK') do
  $driver.find_element(:xpath, '//button[@class="btn-custom btn-custom__block btn-custom__blue mt-3 mb-3"]').click
  sleep(5)
end

And('user click Lanjutkan') do
  Login_Lanjut()
  sleep(5)
end

And('user select card') do
  Card_1()
  sleep(5)
  Choose_Voucher()
  $driver.find_element(:xpath, '//button[@class="btn btn-block mb-2 btn-primary"]').location_once_scrolled_into_view
  sleep(2)
  $driver.find_element(:xpath, '//button[@class="btn btn-block mb-2 btn-primary"]').click
  sleep(10)
end

And('user fill Form 1') do
  User_Name()
  Ident_Number()
  Phone_Number()
  Email_Name()
  ID_Card()
  Self_Pic()
  Last_Education("S1")
  Residence_Status("Milik Sendiri")
  Dependent_Number()
  Home_Phone()
  Mother_Name()
  CurrentAddress_Yes()
  Work_Type("Pegawai Swasta")
  Monthly_Income()
  $driver.find_element(:xpath, '//div[@class="mt-4 mb-4"]/div/div[2]/button').location_once_scrolled_into_view
  sleep(3)
  Next_Button()
  Confirm_Form1()
end

And('user fill Form 2') do
  Company_Name()
  Code_Area()
  Company_Phone()
  Bussiness_Type()
  Position_Status()
  Permanent_Employee()
  Working_Since()
  Company_Address()
  Province_Area("DAERAH ISTIMEWA YOGYAKARTA")
  City_Area("YOGYAKARTA")
  Districts_Area("PAKUALAMAN")
  Subdistricts_Area("GUNUNGKETUR")
  Postal_Code()
  Next_Button()
end

And('user fill Form 3') do
  Family_Name()
  Family_Relation("Orang Tua")
  Family_Phone()
  Next_Button()
end  

And('user fill Form 4') do
  Shipping_Address1()
  Billing_Method1()
  Account_Number()
  Payment_Method2()
  MPP_No()
  Next_Button()
end  

Then('user fill Data Usage Approval') do
  Data_Approval2()
  Next_Button()
end  

And('user fill App Approval field') do
  App_Approval()
  Next_Button()
end  

And('user fill Power Bill field') do
  Power_Bill("-- Pilih tipe power bill --")
  Next_Button()
end  

And('user Add Additional Data') do
  Additional_Photo()
  Data_Name()
  Data_Type("Data 3")
  Data_Date()
  Next_Button()
end  

And('user agree on Data Summary') do
  Agree_Button()
end  

And('user click on captcha field') do
  Captcha_Button()
  Next_Button()
end  