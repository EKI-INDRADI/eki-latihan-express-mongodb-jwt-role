# EKI MEAN BACKEND


- BACKEND API EXPRESSJS JWT & ADMIN ROLE (MONGODB-ANGULAR-EXPRESSJS-NODEJS)


Info API di listen pada 127.0.0.1:8080  pastikan jangan merubah port backend

ini adalah project backend yang dulu dipake untuk test di salah satu prusahaan startup yang saya tambahkan fitur JWT dan Admin Role untuk membuat token


update note : 
- user signup (jwt) dengan role spesifik  done
- user signin (jwt) done
- test halaman user (untuk user akun)  done
- test halaman moderator (untuk  moderator akun)  done
- test halaman admin (untuk  admin akun)  done


next update :
- merubah module (antrian, pasien) tanpa jwt menjadi wajib jwt


# cara run backend :

- install nodejs

- npm install  ( agar instal depedency )

- jalankan perintah "node server.js" tanpa tanda petik

- backend akan berjalan pada port 8080





# Fitur backend :

- CRUD (CREATE READ UPDATE DELETE) untuk collection PASIEN 

- CD (CREATE DELETE) untuk collection ANTRIAN

- Manual pagination konsep , sort , dll

- Antrian dibuat manual tanpa menggunakan fitur mongodb increment

- JSON WEB TOKEN

- Admin role , moderator role , user role






# Flow proses :

- pasien mengambil tiket

- setelah nomor angka dipanggil pasien ke bagian registrasi untuk mendaftarkan lalu admin input data

- setelah berhasil data akan masuk ke list data



Regards,

Eki Indradi