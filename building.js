// code for floor plan image
var indexValue = 1;
showImg(indexValue);

function btn_slide(e) { showImg(indexValue = e); }
function side_slide(e) { showImg(indexValue += e); }
function showImg(e) {
    var i;
    const img = document.querySelectorAll(".floorimg img");
    const sliders = document.querySelectorAll(".sidearrow-visibility span");
    if (e > img.length) {
        indexValue = 1
    }
    if (e < 1) {
        indexValue=img.length
    }
    for (i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    for (i = 0; i < sliders.length; i++){
        sliders[i].style.background = "#66fcf1";
    }
    img[indexValue - 1].style.display = "block";
    sliders[indexValue - 1].style.background = '#0b0c10';
}


// code for gallery images

var indexValue1 = 1;
showImg1(indexValue1);

function btn_slide1(f) { showImg1(indexValue1 = f); }
function side_slide1(f) { showImg1(indexValue1 += f); }
function showImg1(f) {
    var j;
    const img1 = document.querySelectorAll(".gallery-photos img");
    const sliders1 = document.querySelectorAll(".sidearrow-visibility1 span");
    if (f > img1.length) {
        indexValue1 = 1
    }
    if (f < 1) {
        indexValue1=img1.length
    }
    for (j = 0; j < img1.length; j++){
        img1[j].style.display = "none";
    }
    for (j = 0; j < sliders1.length; j++){
        sliders1[j].style.background = "#66fcf1";
    }
    img1[indexValue1 - 1].style.display = "block";
    sliders1[indexValue1 - 1].style.background = '#0b0c10';
}