const express = require('express');
const mysql = require('mysql');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

const app = express();

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Set up AWS S3 client
const s3 = new aws.S3({
  accessKeyId: 'your_access_key_id',
  secretAccessKey: 'your_secret_access_key',
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'your_bucket_name',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, 'images/' + Date.now().toString() + path.extname(file.originalname));
    }
  })
});

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('image'), (req, res) => {
  const url = req.body.url;
  const imageKey = req.file.key;

  // Insert the image and URL link into the MySQL table
  const sql = 'INSERT INTO images (image, url) VALUES (?, ?)';
  const values = [imageKey, url];
  db.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log('Inserted into MySQL table');

    // Return a response to the client
    res.send('Upload successful');
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
