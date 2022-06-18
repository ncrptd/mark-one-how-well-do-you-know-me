var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question('What is your name ? ')
console.log('Welcome ' + userName + ' to how well do you know me quiz')
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
  question: 'What is my full Name ? ',
  answer: 'Rockey Biswas'
},
    {
  question: 'Where Do I Live? ',
  answer: 'Gurgaon'
},
    {
  question: 'What is my favourite street food? ',
  answer: 'Momo'
},
    {
  question: 'What is my favourite movie? ',
  answer: 'Shawshank Redemption'
}    ,
    {
  question: 'How Old Am i ? ',
  answer: '22'
}            ]

for(let i = 0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer)
}

console.log('Your Final Score is ' + score)
