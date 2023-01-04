cardImgs = document.getElementById("cardImages").querySelectorAll("img");

console.log(cardImgs);

imgArray = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", 
            "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png",
            "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png", "30.png",
            "41.png", "42.png", "43.png", "44.png", "45.png", "46.png", "47.png", "48.png", "49.png", "40.png",
            "51.png", "52.png",]



function randomTest() {

    ranIndex = Math.floor(Math.random() * imgArray.length);

    selectedImg = imgArray[ranIndex]

    document.getElementById("1_1").src = `img/${selectedImg}`
}

repeatControlTestImg = ["1.png", "2.png", "3.png", "4.png", "5.png"]

function repeatTest() {
    testIndex = Math.floor(Math.random() * repeatControlTestImg.length)

    testImg = repeatControlTestImg[testIndex]

  

    let index = repeatControlTestImg.indexOf(testImg);

    if (index > -1){
        repeatControlTestImg.splice(index, 1)
    }

    console.log(testImg)

}

// links for later

// https://www.youtube.com/watch?v=1YjybCS4B2U

// https://www.youtube.com/watch?v=8I3NTE4cn5s

// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
