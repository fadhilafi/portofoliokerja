def Card_1()
    card1 = $driver.find_element(:xpath, '//p[@class="card-title"]').text
    log(card1)
    sleep(2)
    $driver.find_element(:xpath, '//button[@class="btn btn-block mb-2 btn-primary"]').click
    sleep(2)
end

def Voucher()
    $driver.find_element(:xpath, '//div[@class="voucher-container"]').click
    sleep(3)
    voucher1 = $driver.find_element(:xpath, '//div[@class="voucher-picker-body"]/div[4]/div[2]/p[1]').text
    log(voucher1)
    sleep(2)
    $driver.find_element(:xpath, '//div[@class="voucher-picker-body"]/div[4]/div[3]/img').click
    sleep(2)
    $driver.find_element(:xpath, '//div[@class="voucher-container"]').click