def Card_1()
    card1 = $driver.find_element(:xpath, '//p[@class="card-title"]').text
    log(card1)
    sleep(2)
    $driver.find_element(:xpath, '//button[@class="btn btn-block mb-2 btn-primary"]').click
    sleep(2)
end    