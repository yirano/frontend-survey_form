var familyCount = document.getElementById('familyCount');
var childrenCount = document.getElementById('childrenCount');
var otherProduct = document.getElementById('otherProduct');


var sections = {
    'Family': 'section1',
    'Children': 'section2',
    'Professional': 'section3',
        'Boudoir': 'section4',
        'Other': 'section5'
};


services.addEventListener('change', selection);
    
function selection(select) {
    
    for(var i in sections) {
     document.getElementById(sections[i]).style.display = "none";    

    document.getElementById(sections[this.value]).style.display = "block";
            
     }
}


otherProduct.addEventListener('change', function(){
    if(otherProduct.checked) {
        console.log("other was checked");
        document.getElementById('otherInput').style.display = 'block';
    } else {
        document.getElementById('otherInput').style.display = 'none';

    }
});


childrenCount.addEventListener('change', function(){
    console.log(childrenCount.value);
});

familyCount.addEventListener('change', function(){
    console.log(familyCount.value);
});

console.log("yolo");