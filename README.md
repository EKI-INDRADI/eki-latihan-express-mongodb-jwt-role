# EKI MEAN BACKEND


"Auto jadi backend"


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
- express file upload & download media/images 

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