function ChangePicture() {
    var i = getRandomIntInclusive(0, 32);
    var imageUrl = `https://chubarich.fvs.app/${i}.png`;
    document.getElementById('photo').src = imageUrl;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

