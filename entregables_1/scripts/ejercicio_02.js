const url = "https://via.placeholder.com/";
const imgs = [500, 150, 700, 300];
var index = 0;

const imgsElement = document.getElementById('imagen1');


imgsElement.src = url + imgs[index];

imgsElement.addEventListener("click", function() {
    index++;
    if (index >= imgs.length) index = 0;
    imgsElement.src = url + imgs[index];
})