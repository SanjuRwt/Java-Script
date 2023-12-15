const questions=[{
    'ques':"Which of the following is a markup language?",
    'a':"HTML",
    'b':"JAVA",
    'c':"SQL",
    'd':"CSS",
    'correct':'a'
},
{
    'ques':"What is the extension of java",
    'a':".HTML",
    'b':".JAVA",
    'c':".CPP",
    'd':"CSS",
    'correct':'b'
},
{
    'ques':"Who is the Devloper of java?",
    'a':"Tim Berners-lee",
    'b':"Deninis Ritchie",
    'c':"Jams Gosling",
    'd':"Guido Rossum",
    'correct':'c'
},
{
    'ques':"What was java name before?",
    'a':"Grren Team",
    'b':"Oak",
    'c':"Java",
    'd':"Silk",
    'correct':'b'
},
{
    'ques':"All Keywords in C are?",
    'a':"LowerCase letters",
    'b':"UpperCase letters",
    'c':"CamelCase letters",
    'd':"None of the mentioned",
    'correct':'a' 
},
{
    'ques':"What is the full name sql?",
    'a':"Structured Query Language",
    'b':"Structured Query List",
    'c':"Simple Query Language",
    'd':"None of thise",
    'correct':'a' 
},
{
    'ques':"What operator performs pattern matching?",
    'a':"BETWEEN operator",
    'b':"LIKE operator",
    'c':"EXISTS operator",
    'd':"None of thise",
    'correct':'b' 
},
{
    'ques':"JavaScript is an language?",
    'a':"Object-Oriented",
    'b':"Object-Base",
    'c':"Procedural",
    'd':"None of thise",
    'correct':'a' 
},
{
    'ques':"Which of the following kwywords is used to define a variable in JavaScript?",
    'a':"var",
    'b':"let",
    'c':"Both A and B",
    'd':"None of thise",
    'correct':'c' 
},
{
    'ques':"The full form of CSS is?",
    'a':"Coloured Special Sheets",
    'b':"Cascading Style Sheets",
    'c':"Colour and style sheets",
    'd':"None of thise",
    'correct':'b' 
}
]

let index = 0;
const questionBox = document.querySelector('#questionBox');
const optionInputs = document.querySelectorAll('.option');
let total=questions.length;
let rigth=0,worng=0;

function loadQuestions(){
    if(index===total)
    {
        return endQuix();
    }
    retsat();
    const data = questions[index];
    console.log(data);
    questionBox.innerText = `${index+1}) ${data.ques}`;
    optionInputs.forEach((input, i) => {
        input.nextElementSibling.innerText = data[String.fromCharCode(97 + i)];
    });
}
function submitQueiz()
{
    const data=questions[index];
    const ans=getAnswer()
    if(ans==data.correct){
        rigth++;
    }else{
        worng++
    }
    index++;
    loadQuestions();
    return;
}
function getAnswer()
{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
               answer=input.value;
            }
        }   
    )
    return answer;
}
function retsat()
{
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                input.checked=false;
            }
        }   
    )
}
function endQuix()
{
    var score=10;
    var totalResult=score*rigth;
    console.log(totalResult);
    document.getElementById("box").innerHTML=`<h3 style="text-align:center">Thanks for playing quiz<h3>
    <h2  style="text-align:center">${rigth}/${total }are correct</h2>
    <h2 style="text-align:center">Score: ${totalResult}`;
    console.log;
}
loadQuestions();
function submitQueiz() {
    const data = questions[index];
    const ans = getAnswer();
    if (ans) {
        if (ans === data.correct) {
            rigth++;
        } else {
            worng++;
        }
        index++;
        loadQuestions();
    } else {
        alert("Please select option");
    }
}

