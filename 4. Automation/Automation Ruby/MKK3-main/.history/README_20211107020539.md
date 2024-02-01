# MKK3

1. Download and Install

- VS Code:	https://code.visualstudio.com/download
- Ruby:

a. [Windows]
- https://rubyinstaller.org/

b. [Linux/MacOS]
- Install GPG
- Linux: sudo apt install gnupg
- MacOS: https://gpgtools.org/
- Install RVM: https://rvm.io/rvm/install
- Install Ruby: https://rvm.io/rubies/installing

- JDK 8:	https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html
- Node.js:	https://nodejs.org/dist/latest/
- Android SDK:	https://developer.android.com/studio/archive
- Device: Emulator bisa diunduh dari AVD Manager di Android Studio, atau bisa menggunakan real device.

2. Instalasi Appium

Windows & Mac OS
- Jalankan terminal/command prompt.
- Ketik npm install -g appium
- Tekan Enter.
- Jika sudah selesai, untuk mengecek apakah Appium sudah berhasil diinstall atau belum, ketik appium -v. Jika muncul versi Appium, maka instalasi berhasil.

Linux
- Jalankan terminal/command prompt.
- Ketik sudo npm install -g appium --unsafe-perm=true --allow-root
- Tekan Enter.
- Jika sudah selesai, untuk mengecek apakah Appium sudah berhasil diinstall atau belum, ketik appium -v. Jika muncul versi Appium, maka instalasi berhasil.

3. Instalasi Gem

- Jalankan terminal/command prompt.
- Ketik gem install cucumber, tekan Enter.
- Ketik gem install gherkin, tekan Enter.
- Ketik gem install appium_lib, tekan Enter.
- Ketik gem install rspec, tekan Enter.
- Ketik gem install report_builder, tekan Enter.
- Untuk mengecek, ketik gem list, tekan Enter.

4. Instalasi Web Driver

Windows:
- Salin chromedriver dan geckodriver yang sudah diunduh ke direktory/folder bin yang ada di dalam instalasi Ruby, misal:
Jika instalasi Ruby terletak pada folder C:\Ruby24-x64, maka salin ke folder C:\Ruby24-x64\bin

Linux dan Mac OS:
- Salin chromedriver dan geckodriver yang sudah diunduh ke direktory/folder bin yang ada di dalam /usr/local/bin/.


5. Menjalankan Automation

- Jalankan terminal/command prompt.
- Masuk ke direktori project yang kita buat tadi.

Command:
A. Menjalankan semua scenario
1. cucumber
2. tekan Enter (tunggu hingga automation selesai dijalankan)

B. Menjalankan scenario tertentu
1. cucumber -t @abcd
2. tekan Enter (tunggu hingga automation selesai dijalankan)

C. Menjalankan scenario sekaligus membuat report
1. cucumber -f pretty --expand -f json -o report.json
2. tekan Enter (tunggu hingga automation selesai dijalankan)
3. ruby report_builder.rb