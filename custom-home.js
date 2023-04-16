var indexValue = 1;
showImg(indexValue);

function btn_slide(e) { showImg(indexValue = e); }
function side_slide(e) { showImg(indexValue += e); }
function showImg(e) {
    var i;
    const img = document.querySelectorAll(".gallery-image img");
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