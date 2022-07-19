const AWS = require("aws-sdk")


const s3 = new AWS.S3()

// Add new object to bucket - self calling fn, runs when we do 'node index.js'
// s3.putObject({
//   Body: "Hello again!! 😊",
//   Bucket: "bsanto-myuploads",
//   Key: "mynew-file.txt",
// }).promise()

const Pokemon = new Array(
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate"
)

// s3.deleteObject({
//   Bucket: "bsanto-myuploads",
//   Key: "my-file.txt",
// }).promise()

// Add each pokemon from the array to the Bucket
function uploadPokeData() {
  Pokemon.forEach((pokemon, index) => {
    // console.log(pokemon, index)

    s3.putObject({
      Body: `Hello my pokedex number is, ${index + 1}!! 😊`,
      Bucket: "bsanto-myuploads",
      Key: `${pokemon}.txt`,
    }).promise()
  })
}
// uploadPokeData()

// console.log(Pokemon)
var params = {
  Bucket: "bsanto-myuploads",
  Key: "Weedle.txt",
}

s3.deleteObject(params, function (err, data) {
  if (err) console.log(err, err.stack) // an error occurred
  else console.log(data) // successful response
})
