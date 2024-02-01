def channel_reguler
  $session = Capybara::Session.new(:iphone)
  $session.visit "http://retailloan.dcidev.id/kasbon/form/ksbr"
  sleep(2)
  puts "landing reguler"
end
def channel_eform
  $session.visit "http://retailloan.dcidev.id/kasbon/form/ksbe"
  sleep(2)
  puts "landing eform"
end
def channel_staff
  $session.visit "http://retailloan.dcidev.id/kasbon/form/ksbs"
  sleep(2)
  puts "landing staff"
end
def close_form
  $session.quit
  puts "Form Closed"
end