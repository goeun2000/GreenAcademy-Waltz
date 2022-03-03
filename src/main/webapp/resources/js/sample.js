function gogo1() {
    
    let dog1 = document.getElementById("dog1");
    let dog2 = document.getElementById("dog2");

    if(dog1.style.display = 'none') {
        dog1.style.display = 'block';
        dog1.style.border = "3px blue solid";
        dog2.style.opacity = '30%';
        dog1.style.opacity = '100%';
    }
}

function gogo2() {
    
    let dog1 = document.getElementById("dog1");
    let dog2 = document.getElementById("dog2");

    if(dog2.style.display = 'none') {
        dog2.style.display = 'block';
        dog2.style.border = "3px yellow solid";
        dog1.style.opacity = '30%';
        dog2.style.opacity = '100%';
    }
}


    