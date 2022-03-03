function calculate() {
    let dogage = document.getElementById("dogage");

    let sum;

    sum = (Math.log(dogage.value) * 16) + 31;
    let last = Math.round(sum * 1000) / 1000;
    let result = document.getElementById("result");
    result.value = last; 

}

function show() {
    let age_box = document.getElementById("age_box");

    if(age_box.style.display === 'none') {
        age_box.style.display = 'block';
    } else {
        age_box.style.display = 'none';
    }

}



function test1() {

    let dog = document.querySelector(".dog");
    let cat = document.querySelector(".cat");
    dog.classList.toggle("active");
    cat.classList.toggle("active");
    let age_box1 = document.getElementById("age_box1");
    
    if(age_box1.style.display === 'none') {
        age_box1.style.display === 'block'
    } else {
        cat.style.border = 'rgb(240, 186, 165) solid 3px';
        cat.style.opacity = '30%';
        dog.style.opacity = '100%';
        age_box1.style.backgroundColor = 'rgb(180, 215, 235';
        age_box2.style.marginLeft = '-2000px';
    }
}

function test2() {

let dog = document.querySelector(".dog");
let cat = document.querySelector(".cat");
dog.classList.toggle("active");
cat.classList.toggle("active");
let age_box2 = document.getElementById("age_box2");

if(age_box2.style.display === 'none') {
    age_box2.style.display = 'block';
    
} else {
    dog.style.border = 'rgb(70, 130, 180) solid 3px';
    dog.style.opacity = '30%';
    cat.style.opacity = '100%';
    age_box1.style.position= 'relative';
    age_box2.style.position= 'absolute';
    age_box1.style.zIndex = "3";
    age_box2.style.zIndex = "2";
    age_box2.style.marginTop = '-329px';
    age_box2.style.marginLeft = '0px';
    age_box2.style.backgroundColor = 'rgb(240, 186, 165)';
    
    }
}

function getAge1() {

    
    let birthday = document.getElementById('birthday1').value.split("-");

    let d1 = new Date(birthday[0], birthday[1]-1, birthday[2]);

    let d2 = new Date();

    let diff = d2.getTime() - d1.getTime();
    let daysPast = Math.floor(diff / (1000 * 60 * 60 * 24)); // 일수 
    let age = Math.floor(daysPast / 365.25);

    if(age < 1) {  // age가 1이 안되는 경우
        let dog_age = Math.floor((((Math.log(daysPast / 365.25) * 16) + 31) *1))/1  ;

        document.getElementById("daysPast1").innerHTML = daysPast;
        document.getElementById("age1").innerHTML = dog_age;
    } else {
        let dog_age = Math.floor((((Math.log(age) * 16) + 31) *1))/1  ;

        document.getElementById("daysPast1").innerHTML = daysPast;
        document.getElementById("age1").innerHTML = dog_age;
}

    }

    

function getAge2() {

    
    let birthday = document.getElementById('birthday2').value.split("-");

    let d1 = new Date(birthday[0], birthday[1]-1, birthday[2]);

    let d2 = new Date();

    let diff = d2.getTime() - d1.getTime();
    let daysPast = Math.floor(diff / (1000 * 60 * 60 * 24));
    let age = Math.floor(daysPast / 365.25);

    
    let age_noRound = ((age-2) * 4) + 21;

    let cat_age =  Math.round(age_noRound * 100) / 100;

    document.getElementById("daysPast2").innerHTML = daysPast;
    document.getElementById("age2").innerHTML = cat_age;
}


