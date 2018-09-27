var services = document.getElementById("services");
var ageHide = document.getElementById("ageHide");


services.addEventListener('change', function(){

if(services.value=='Children') {
    ageHide.style.display = "block";
} else {
    ageHide.style.display = "none";
}
});

console.log("yolo");