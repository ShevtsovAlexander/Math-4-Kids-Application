const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')

const audio = document.querySelector('#myAudio')

var answer = 0;

function generate_equation() {
    var num1 = Math.floor(Math.random() * 10) + 1,
    num2 = Math.floor(Math.random() * 10) + 1,
    dummyAnswer1 = Math.floor(Math.random() * 10) / 10,
    dummyAnswer2 = Math.floor(Math.random() * 10),
    allAnswers = [],
    switchAnswers = [];

    answer = eval(num1 / num2);
    
    if(Number.isInteger(answer) == false){
        answer = answer.toFixed(1);
      }
    document.querySelector('#num1').innerHTML = num1;
    document.querySelector('#num2').innerHTML = num2;

    var allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for (i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
      };
    
      option1.innerHTML = switchAnswers[0];
      option2.innerHTML = switchAnswers[1];
      option3.innerHTML = switchAnswers[2]; 
}
option1.addEventListener('click', () => {
    if(option1.innerHTML == answer) {
        generate_equation();
    } else {
        audio.play();
    }
})
option2.addEventListener('click', () => {
    if(option2.innerHTML == answer) {
        generate_equation();
    } else {
        audio.play();
    }
})
option3.addEventListener('click', () => {
    if(option3.innerHTML == answer) {
        generate_equation();
    } else {
        audio.play();
    }
})
generate_equation()