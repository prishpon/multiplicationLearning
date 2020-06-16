"use strict()";

let m2 = document.getElementById('m2'),
m3 = document.getElementById('m3'),
m4 = document.getElementById('m4'),
m5 = document.getElementById('m5'),
m6 = document.getElementById('m6'),
m7 = document.getElementById('m7'),
m8 = document.getElementById('m8'),
m9 = document.getElementById('m9'),
    catgirl = document.getElementById('catgirl'),
    multButton = document.getElementsByClassName('multButton'),
    number1 = document.getElementById('number1'),
    number2 = document.getElementById('number2'),
    checkBtn = document.getElementById('check'),
    userAnswer = document.getElementById('userAnswer'),
    next = document.getElementById('next'),
    startCheck = false,
    audio = document.getElementById('happyAudio'),
    sadAudio = document.getElementById('sadAudio'),
    sign = document.getElementById('sign'),
    mark =document.getElementById('mark'),
    navButtun = document.querySelectorAll('.navigation'),
    oneAudio = document.getElementById('oneAudio'),
    twoAudio = document.getElementById('twoAudio'),
    ball = document.querySelectorAll('.ball'),
    ballWrapper =document.querySelector('.ballWrapper'),
    u,a,b,aAudio,bAudio,multFor;

    hideBall();
 
navButtun.forEach(function(item){
    item.disabled = true; 
});


m2.addEventListener('click',function(){
    startCheck= true;
    multFor=2;
    mult(multFor);
    
});
m3.addEventListener('click',function(){
    startCheck= true;
    multFor=3;
    mult(multFor);
});

m4.addEventListener('click',function(){
    startCheck= true;
    multFor=3;
    mult(multFor);
});

m5.addEventListener('click',function(){
    startCheck= true;
    multFor=5;
    mult(multFor);
});
m6.addEventListener('click',function(){
    startCheck= true;
    multFor=6;
    mult(multFor);
});
m7.addEventListener('click',function(){
    startCheck= true;
    multFor=7;
    mult(multFor);
});

m8.addEventListener('click',function(){
    startCheck= true;
    multFor=8;
    mult(multFor);
});

m9.addEventListener('click',function(){
    startCheck= true;
      multFor=9;
    mult(multFor);
});

next.addEventListener('click',function(){  
    hideBall();
   mark.value = '';
   catgirl.style.display="none";
    mult(multFor);

});

function mult(multFor){

    if(startCheck==true){
      
        navButtun.forEach(function(item){
            item.disabled = false;  
        });


        userAnswer.value = '';
        mark.innerHTML = '';

    a = Math.floor((Math.random() * 9)+1);
    b = Math.floor((Math.random() * multFor)+1);

    number1.innerHTML = a;
    number2.innerHTML = b;

  

    }else{
        return alert('finish');

    }
};


  checkBtn.addEventListener('click',function(){
    u = userAnswer.value;

    if(u == a*b){
        mark.classList.add("correct");
        correctAnswer();
       
     }else{
        
        wrongAnswer(a,b);
        showBall(a,b);
     }
     
});


function wrongAnswer(a,b){
        mark.innerHTML = "NO! "+ a + " * " + b + " = "+ a * b;
        mark.classList.add("wrong");
        sadAudio.play();
        userAnswer.value = ' ';
        showBall(a*b);
}
function correctAnswer(){
    audio.play(); 
    catgirl.style.display="block";
    mark.innerHTML = "YES";
    
    userAnswer.value = '';
  
}

function hideBall(){
     for(let i = 0;i<ball.length;i++){
        ball[i].classList.add('hide');
        ball[i].classList.remove('show');
     }
};

function showBall(a,b){
     for(let i = 0;i < a;i++){
         ball[i].textContent = b;
         ball[i].classList.remove('hide');
         ball[i].classList.add('show');
     }
};

