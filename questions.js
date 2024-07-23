let timer = 20;
// Timer function
function countTimer() {
    if (timer >= 0) {
        if (timer < 10) {
            document.getElementById('timer').innerText = "00:0" + timer;
        } else {
            document.getElementById('timer').innerText = "00:" + timer;
        }
        timer--;
    } else {
        clearInterval(interval);
    }
}

// Reset timer function
function timerReset() {
    timer = 20;
    document.getElementById('timer').innerText = "00:20";
}

// Run the timer function every 1 second
const interval = setInterval(countTimer, 1000);


const questions = [
    {
      question: '1.What does HTML stand for?',
      options: [
        'Hyper Text Preprocessor',
        'Hyper Text Multiple Language',
        'Hyper Text Markup Language',
        'Hyper Tool Multi Language'
      ],
      correctAnswer: '3'
    },
    {
      question: '2.What does CSS stand for?',
      options: [
        'Colorful Style Sheets',
        'Cascading Style Sheets',
        'Computer Style Sheets',
        'Creative Style Sheets'
      ],
      correctAnswer: '2'
    },
    {
      question: '3.What does JS stand for?',
      options: [
        'JavaScript',
        'JavaSource',
        'JavaStyle',
        'JustScript'
      ],
      correctAnswer: '1'
    },
    {
        question: '4.What does CSS stand for?',
        options: [
          'Cascading Style Sheets',
          'Colorful Style Sheets',
          'Computer Style Sheets',
          'Creative Style Sheets'
        ],
        correctAnswer: '1'
      },
      {
        question: '5.What does CSS stand for?',
        options: [
          'Cascading Style Sheets',
          'Colorful Style Sheets',
          'Computer Style Sheets',
          'Creative Style Sheets'
        ],
        correctAnswer: '1'
      },
  ];

  var  qCount=0;

function doNextQuestion(){
    if(qCount===5){
        document.getElementById('formcontent').style="display:none";
        document.getElementById('questionNumber').style="display:none";
        document.getElementById('nextButton').style="display:none";
        document.getElementById('result').style="display:block";
        document.getElementById('timer').style="display:none"
        document.getElementById('score').innerHTML = result+"/5";
    }else{
        removeSelect();
        document.getElementById('questionNumber').innerHTML="Questions "+(qCount+1)+"/5";
        document.getElementById('question').innerHTML=questions[qCount].question;
        document.getElementById('answer1').innerHTML=questions[qCount].options[0];
        document.getElementById('answer2').innerHTML=questions[qCount].options[1];
        document.getElementById('answer3').innerHTML=questions[qCount].options[2];
        document.getElementById('answer4').innerHTML=questions[qCount].options[3];
        // document.getElementById('score').style="display:none"
        document.getElementById('result').style="display:none"
    }
    qCount++;
}

function setName() {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    let username = '';

    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'username') {
            username = value;
            break;
        }
    }

    if (username) {
        document.getElementById('username').innerText = username;
    } else {
        console.log('Username cookie not found.');
    }
}


var result =0;

function answer(answer){
    if (questions[qCount-1].correctAnswer == answer) {
        result = result + 1
        console.log(result)
        console.log(qCount)
      }
}


function removeSelect(){
    document.getElementById('answer1div').classList.remove('selectedAnswer');
    document.getElementById('answer2div').classList.remove('selectedAnswer');
    document.getElementById('answer3div').classList.remove('selectedAnswer');
    document.getElementById('answer4div').classList.remove('selectedAnswer');
    document.getElementById('answer1radio').checked=false;
    document.getElementById('answer2radio').checked=false;
    document.getElementById('answer3radio').checked=false;
    document.getElementById('answer4radio').checked=false;
}

setName();
doNextQuestion();
