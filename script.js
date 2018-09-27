var services = document.getElementById("services");
var childrenCountHide = document.getElementById("childrenCountHide");
var childrenCount = document.getElementById('childrenCount');
var otherProduct = document.getElementById('otherProduct');


services.addEventListener('change', function(){
    if(services.value=='Children') {
        childrenCountHide.style.display = "block";
        childrenCount.addEventListener('change', childCount);

    } else {
        childrenCountHide.style.display = "none";
    }
});

otherProduct.addEventListener('change', function(){
    if(otherProduct.checked) {
        console.log("other was checked");
        document.getElementById('otherInput').style.display = 'block';
    } else {
        document.getElementById('otherInput').style.display = 'none';

    }
});


function childCount(){
    console.log(childrenCount.value);
}

console.log("yolo");