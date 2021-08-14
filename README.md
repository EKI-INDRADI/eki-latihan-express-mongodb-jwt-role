# EKI RESEARCH & DEVELOPMENT BACKEND

"MAKE BEST BACKEND ENGINEER, JUST FREE FOR YOU"


- BACKEND API EXPRESSJS ZAMAN NOW !!!


Info API di listen pada 127.0.0.1:8080  

ini adalah project backend yang pernah dipakai untuk test di salah satu prusahaan startup yang saya tambahkan beberapa fitur canggih ZAMAN NOW


update note : 
- user signup (jwt) dengan role spesifik  [done]
- user signin (jwt) [done]
- test halaman user (untuk user akun) [done]
- test halaman moderator (untuk  moderator akun)  [done]
- test halaman admin (untuk  admin akun)  [done]
- merubah module (antrian, pasien) tanpa jwt menjadi wajib jwt [done]
- file upload & download media/images  [done]
- request limit [done]
- multi threads /  cluster / multithreading [done]
- multi child process comunication (spesific, still learning to dynamic synchronous) [done]
- disable restart nodemon (restart js file only) [done]
- enable PM2 mode cluster [done]
- try catch function detail [done]
- view delay response time (milisecond) [done]
- multi child process comunication (spesific & FIFO alorithm for dynamic synchronous) [done]
- loadtest (testing cluster & child process = multi request per second) [done]
- automatic check undefined data with function request_validation [done]
- update generate log file milisecond + microsecond + nanosecond [done]
- update dynamic cpu thread (auto generate child + cluster.fork) [done]

next update :
- message broker / event driven [still rnd]
- database caching [still rnd]
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

- npm install nodemon

- npm install  ( agar instal depedency )

- jalankan perintah,

multi threads :
```ts
npm run start:cluster   (nodemon)
pm2 start ecosystem.config.js   (pm2)
```

- backend akan berjalan pada port 8080





# Fitur backend :

- CRUD (CREATE READ UPDATE DELETE) untuk collection PASIEN 

- CD (CREATE DELETE) untuk collection ANTRIAN

- Manual pagination konsep , sort , dll

- Antrian dibuat manual tanpa menggunakan fitur mongodb increment

- JSON WEB TOKEN

- Admin role , moderator role , user role

- file upload & download media/images

- create file log 






# Scalable & Optimize backend (Performance Tuning) :

- Global request limit , (1 request / second dalam 1 IP) , berguna untuk mencegah server membaca request yang tidak diperlukan, atau bisa juga mencegah apabila API melakukan insert secara bersamaan yang mengakibatkan data duplicate.

- multi threads / node cluster / multithreading, menggunakan seluruh threads cpu pada waktu bersamaan.

- child process , memanfaat threads secara spesific dan dapat melakukan multi handle dalam waktu yang bersamaan (tanpa antrian).





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

- Udemy - Pravinkumar Dabade 

(https://www.udemy.com/course/node-js-cluster)

- https://github.com/behroozk/node-cluster-tutorial



# Regards,

# Eki Indradi
"TIME > KNOWLEDGE > MONEY".





