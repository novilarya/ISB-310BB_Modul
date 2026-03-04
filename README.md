# Submission Praktikum ISB 310 Sistem Informasi Berbasis Web Minggu ke-3
## Identitas Pemilik
- Nama : Novila Arya Minar Saputra
- NRP  : 162023024
## Penjelasan Kode
Pada minggu ketiga ini difokuskan dalam penggunaan PHP, Session, dan Cookies. Ketiga hal tersebut diimplementasikan pada file proses_login.php, proses_logout.php pada folder controller, login.php, dan perubahan yang awalnya index.html menjadi index.php.
### index.php
  Pada file index.php terdapat perubahan pada penamaanya yang awalnya index.html menjadi index.php agar dapat membaca kode php. Terdapat penambahan kode pada bagian atas baris ke-1 hingga ke-9 yaitu kode php yang membaca session lalu mengecek nilai user, jika ada masukkan ke variabel user. Jika tidak, variabel user diisi null. Serta pada bagian navbar terdapat tombol login jika variabel user bernilai null, namun jika variabel user berisi maka akan menampilkan button logout dan nama dari user tersebut.
### login.php
  File login.php merupakan file baru yang berguna untuk tampilan login setelah mengklik button login pada navbar index.php. Pada halaman ini berfungsi untuk menerima informasi login baik username dan password lalu dikirimkan mengunakan method POST dengan aksi ada di file controller/proses_login.php.
### controller/proses_login.php
  File proses_login.php berfungsi untuk melakukan aksi ketika data dari halaman login.php dikirimkan. Tedapat inisialisasi varibael username dan password berdasarkan data dari halaman login.php. Lalu ada isset($_POST['remember']) yang berguna ketika user mengklik remember me pada login.php maka akan menyimpan cookie pada web tersebut selama 1 jam. Selanjutnya terdapat pengecekan jika bernilai benar username dan passwordnya, maka akan kembali ke halaman index.php. Namun jika salah, maka akan muncul error pada halaman login.php
### controller/proses_logout.php
  File proses_logout.php berfungsi ketika user mengklik button logout pada navbar di index.php. Di dalamnya terdapat inisialisasi sesi atau session_start(), lalu mengosongkan variabel sesi tersebut ($_SESSION = [];), lalu menghapus sessionnya (session_destroy();), lalu menghapus cookie-nya juga dengan mengurangi waktunya, dan yang terakhir maka akan kembali lagi ke halaman index.php.
