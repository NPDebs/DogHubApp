// // console.log('Hello world!')

// //https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById('dogImageDiv')
const dogImage = document.getElementById('dogImage')

const getCuteDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message) //property of object

        dogImage.src = json.message
    })
}
