var readlineSync = require('readline-sync');
var score = 0;
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    score++;
    console.log('Right')
  } else{
    console.log('Wrong')
  }
  console.log('Current score ' + score)
  console.log('\n')
}


const questions = [{
  question: 'What is my Name? ',
  answer: 'Rockey'
},
    {
  question: 'Where Do I Live? ',
  answer: 'Gurgaon'
}              ]

for(let i = 0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer)
}

console.log('Your Final Score is ' + score)