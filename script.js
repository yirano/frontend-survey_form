var services = document.getElementById("services");
var childrenCountHide = document.getElementById("childrenCountHide");
var childrenCount = document.getElementById('childrenCount');


services.addEventListener('change', function(){
    if(services.value=='Children') {
        childrenCountHide.style.display = "block";
        childrenCount.addEventListener('change', childCount);

    } else {
        childrenCountHide.style.display = "none";
    }
});


function childCount(){
    console.log(childrenCount.value);
}

console.log("yolo");