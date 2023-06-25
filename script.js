const quizData = [
    {
        question:"What is the most used programming language in 2022 ?",
        a:"Python",
        b:"Java",
        c:"C",
        d:"Javascript",
        correct:"b"
       
    },
    {
        question:"Inside which HTML element do we put the JavaScript ?",
        a:"script",
        b:"scripting",
        c:"js",
        d:"Javascript",
        correct:"a"   
    },
    {
        question:"Where is the correct place to insert a JavaScript?",
        a:"Head Section",
        b:"Body Section",
        c:"Both Head and Body Section",
        d:"None of these",
        correct:"c"
    },
    {
        question:"What does CSS stand for?",
        a:"Creative Style Sheets",
        b:"Colorful Style Sheets",
        c:"Cascading Style Sheets",
        d:"Computer Style Sheets",
        correct:"c"
    },
    {
        question:"Who is making the Web standards?",
        a:"World Wide Web Consortium",
        b:"Microsoft",
        c:"Chorme",
        d:"Firefox",
        correct:"a"
    },
    {
        question:"How can you created rounded corners using CSS3?",
        a:"border[round]: 30px;",
        b:"corner-effect: round;",
        c:"alpha-effect: round-corner;",
        d:"border-radius: 30px;",
        correct:"d"
    }
]
let question = document.getElementById("question");
let quizBox = document.getElementById("quiz-box");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();
function getSelected()
{
   
   
    const answerElm = document.querySelectorAll(".answer");
    let answer = undefined;
    answerElm.forEach((answerEl) => {
        if(answerEl.checked===true){
            answer = answerEl.id;
        }
    })
    return answer;
    
}
function deslected() {
    const answerElm = document.querySelectorAll(".answer");
    answerElm.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

function loadQuiz()
{
    deslected();
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    option1.innerText = currentQuizData.a;
    option2.innerText = currentQuizData.b;
    option3.innerText = currentQuizData.c;
    option4.innerText = currentQuizData.d;
    
}

submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizBox.innerHTML = `
                                <h2 class="result">You answered correctly at ${score}/${quizData.length} questions.</h2>
                                <button onclick="location.reload()">Reload</button>
                                `
        }
    }
   
})


