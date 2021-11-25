const xoutput = document.getElementById("xoutput");
const youtput = document.getElementById("youtput");
const zoutput = document.getElementById("zoutput");

if(window.DeviceMotionEvent){
    window.addEventListener("devicemotion", handleMotionEvent, true);
  }else{
    window.alert("DeviceMotionEvent is not supported");
  }

function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    xoutput.innerHTML = x;
    youtput.innerHTML = y;
    zoutput.innerHTML = z;
}