const banner = document.getElementById('slide');
var imgIdx = 0;
const imgArray = [
  "imgs/banners/main_PC_1920x440_20201006040046969.jpg",
  "imgs/banners/main_PC_1920x440_20201007112359990.jpg",
  "imgs/banners/main_PC_1920x440_20201028065401190.jpg",
  "imgs/banners/main_PC_1920x440_20201029050402793.jpg",
  "imgs/banners/main_PC_1920x440_20201029105140247.jpg",
  "imgs/banners/main_PC_1920x440_20201030114325133.jpg",
];

window.onload = setInterval(() => {
    banner.setAttribute("src",imgArray[imgIdx]);
    imgIdx+=1;
    if(imgIdx>=imgArray.length){
        imgIdx = 0;
    }
},2000);