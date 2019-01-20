var timespan = "10:00";
var secs = 30;
var timeInterval = 30;
var questionsNum = 3;
var numberCorrect = 0;
var correctAnswer = 0;
var gameOver = false;
var numberGen = [];

var triviaGame = [
    {
        question: "What is Goku's Saiyan name?",
        choices: ["Carrot","Son Goku","Kakarot","Raditz"],
        rightAnswer: 2
    },
    {
        question: "What planet is Vegeta from?",
        choices: ["Planet Vegeta","Earth","Uranus","Saiyan Planet"],
        rightAnswer: 0
    },
    {
        question: "______ is the mother of Vegeta's children, as well as the head of Capsule Corp",
        choices: ["Chi Chi", "Bulma", "Android 17","Beyonce"],
        rightAnswer: 1
    },
    {
        question: "Who is Goku's Saiyan Father?",
        choices: ["Gohan","Bardock","Broly","Vegeta"],
        rightAnswer: 1
    },
    {
        question: "Beerus is the God of ______",
        choices: ["Destruction","Earth","Universe 7","Love"],
        rightAnswer: 0
    },
    {
        question: "What transformation allowed Goku to overcome Jiren in the Tournament of Power?",
        choices: ["Super Saiyan", "Super Saiyan God","Super Saiyan Blue", "Ultra Instinct"],
        rightAnswer: 3
    }];

    function arrayGen() {
        var j = 0;
        var questions = questionsNum;

        for(i=0; i < questions; i++)
        {
            j = Math.floor(Math.random() * (triviaGame.length));
            if (numberGen.includes(j)) {
                questions =  questions + 1;
            } else {
                numberGen.push(j);
            }
        }
    }

//display random questions
function displayGame() {
    arrayGen();

    for(i=0; i < numberGen; i++){
        var j = numberGen[i];
        var question = triviaGame[j].question;
        var questionDisplay =  $(document).find(".questionDiv > .question");
        var answerChoices = $(document).find(".questionDiv > .answers");
        //display everything to the page
        var displayQuestion = $(
            <div class = "card">
            <div class= "card-title question">${question}</div>
            <div class= "card-body answers">
                <div class= "row"></div>
                <form>
                    <label class= "radio-inline"><input type= "radio" name= "optradio" id="0">${triviaGame[j].choices[0]}</input> </label>
                    <label class= "radio-inline"><input type= "radio" name= "optradio" id="1">${triviaGame[j].choices[1]}</input> </label>
                    <label class= "radio-inline"><input type= "radio" name= "optradio" id="2">${triviaGame[j].choices[2]}</input> </label>
                    <label class= "radio-inline"><input type= "radio" name= "optradio" id="3">${triviaGame[j].choices[3]}</input> </label>
                </form>
            </div>
            </div>
        )
        $('#questionDiv').append(displayQuestion);
        $(questionDisplay).text(question);    
    }
    //start button    
    $('#questionDiv').append('<div class = "row subbutton"><br></div><button id="start" type="button" disabled="true" class="btn btn-primary">Start!</button>');
    $('#timerDiv').html("Time: " + timespan);
}

/*function checkAnswer(){
    if(document.getElementById(''))
}*/

