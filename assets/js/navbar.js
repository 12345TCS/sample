const manuBarOne = document.getElementById("rect1043");
const manuBarTwo = document.getElementById("rect1147");
var menuClicks = 0;

function openMenu(){
    menuClicks++;
    if(menuClicks % 2 != 0){
        document.getElementById("rect1043").style.transform = "rotate(45deg) translateX(5px) translateY(2px)";
        document.getElementById("rect1147").style.transform = "rotate(-45deg) translateX(13px) translateY(2px)";
    }
    else{
        document.getElementById("rect1043").style.transform = "unset";
        document.getElementById("rect1147").style.transform = "translateX(2.125rem)";
    }
}