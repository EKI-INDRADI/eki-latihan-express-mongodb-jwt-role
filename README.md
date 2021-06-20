# EKI MEAN BACKEND





"MAKE BEST BACKEND ENGINEER, FREE FOR YOU"


- BACKEND API EXPRESSJS JWT & ADMIN ROLE (MONGODB-ANGULAR-EXPRESSJS-NODEJS)


Info API di listen pada 127.0.0.1:8080  

ini adalah project backend yang dulu dipake untuk test di salah satu prusahaan startup yang saya tambahkan fitur JWT dan Admin Role untuk membuat token


update note : 
- user signup (jwt) dengan role spesifik  done
- user signin (jwt) done
- test halaman user (untuk user akun)  done
- test halaman moderator (untuk  moderator akun)  done
- test halaman admin (untuk  admin akun)  done
- merubah module (antrian, pasien) tanpa jwt menjadi wajib jwt
- file upload & download media/images 
- update request limit

next update :
- swagger





# Eki note :

- cara panggil token menggunakan header


HEADER_TOKEN_KEY : JWT_TOKEN_VALUE


contoh token :


```ts
x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOTdhMWJkNjNkNTZkMTM4YzJlNDljMyIsImlhdCI6MTYyMDYxNzIzNiwiZXhwIjoxNjIwNzAzNjM2fQ.9xwZ9goMZpJdBHhh3XGYDp7hUmtmGgi2DT-K5hWcsw0
```


contoh code header :

```ts

  app.use("/api/antrian", router, function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

```


Hash password pake bcryptjs :

```ts
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });
```





# How to run backend :

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

- file upload & download media/images




# Scalable & Optimize backend (Performance Tuning) :

- Global request limit , (1 request / second)





# Flow proses :

- pasien mengambil tiket

- setelah nomor angka dipanggil pasien ke bagian registrasi untuk mendaftarkan lalu admin input data

- setelah berhasil data akan masuk ke list data





# Referensi : 

- https://bezkoder.com/category/node-js/

- https://bezkoder.com/node-js-mongodb-auth-jwt/

- Programmer Zaman Now Vlog - Eko Kurniawan Khannedy 

(https://www.youtube.com/watch?v=3PMLwe_C-F0&list=PL-CtdCApEFH-aVPPDMSfNmKVZghCyGpBQ)

- Udemy - Academind - Maximilian Schwarzmüller

(https://www.udemy.com/course/mongodb-the-complete-developers-guide)






Regards,

Eki Indradi