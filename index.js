const AWS = require("aws-sdk")
// require("dotenv").config()

const s3 = new AWS.S3()

s3.putObject({
  Body: "Hello bucket! 🪣👋🏾",
  Bucket: "bsanto-myuploads",
  Key: "my-file.txt",
}).promise()

// const s3Access = process.env.S3_ACCESS_KEY
// const s3Secret = process.env.S3_SECRET_KEY
// console.log(`the key is ${s3Access}= secret is ${s3Secret}`)
