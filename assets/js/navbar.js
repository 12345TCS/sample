var menuClicks = 0;
var swidth = screen.width;

function openMenu(){
    menuClicks++;
    if(menuClicks % 2 != 0){
        document.getElementById("rect1043").style.transform = "rotate(45deg) translateX(5px) translateY(2px)";
        document.getElementById("rect1147").style.transform = "rotate(-45deg) translateX(13px) translateY(2px)";
        document.getElementById("side-menu").style.left = "0";
    }
    else{
        document.getElementById("rect1043").style.transform = "unset";
        document.getElementById("rect1147").style.transform = "translateX(2.125rem)";
        if (swidth <= 768) {
            document.getElementById("side-menu").style.left = "-80vw";   
        } else {
            document.getElementById("side-menu").style.left = "-20vw";
        }
    }
}