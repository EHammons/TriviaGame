var questions = {
    qAndA: [{
        q: "What is the name of Jasmine's tiger?",
        img: "<img src= '/assets/images/jasmine.jpg'>",
        ans1: "Rajesh",
        ans2: "Rajah",
        ans3: "Abu",
        ans4: "Sher Kahn"
    }, {
        q: "What are the name's of Cinderella's mice friends?", 
        img: "<img src='/assets/images/cinderella.jpg'>",
        ans1: "Bianca & Bernard",
        ans2: "Dumb & Dumber",
        ans3: "Jaq & Gus",
        ans4: "George & Lennie"
    }, {
        q: "How old is Snow White?",
        img: "<img src='/assets/images/snow-white.gif'>",
        ans1: "13",
        ans2: "18",
        ans3: "16", 
        ans4: "14"
    }, {
        q: "How many 'thingamabobs' does Ariel have?",
        img: "<img src='/assets/images/ariel.jpg'>",
        ans1: "Plenty",
        ans2: "20",
        ans3: "13",
        ans4: "Too Many",
    }, {
        q: "Which princess has the least amount of screen time in her own movie?",
        img: "<img src='/assets/images/princesses.jpg'>",
        ans1: "Aurora",
        ans2: "Cinderella",
        ans3: "Belle",
        ans4: "Jasmine"
    }, {
        q: "Which character sings the song 'Beauty and the Beast'?",
        img: "<img src='/assets/images/belle.jpg'>",
        ans1: "Lumiere",
        ans2: "Chip",
        ans3: "Mrs. Potts",
        ans4: "Cogsworth"
    }]
};

// Correct answers:
    // qAndA[0] = ans2;
    // qAndA[1] = ans3;
    // qAndA[2] = ans4;
    // qAndA[3] = ans2;
    // qAndA[4] = ans1;
    // qAndA[5] = ans3

var score = 0;
var questionIndex = 0;
var timeLeft = 30;
var timeLeftID;

function renderButtons() {
    $("#buttons").empty();
    var a = $("<button>");
    a.addClass("firstAnswer");
    a.text(questions.qAndA[questionIndex].ans1);
    $("#buttons").append(a);
    var b = $("<button>");
    b.addClass("secondAnswer");
    b.text(questions.qAndA[questionIndex].ans2);
    $("#buttons").append(b);
    var c = $("<button>");
    c.addClass("thirdAnswer");
    c.text(questions.qAndA[questionIndex].ans3);
    $("#buttons").append(c);
    var d = $("<button>");
    d.addClass("fourthAnswer");
    d.text(questions.qAndA[questionIndex].ans4);
    $("#buttons").append(d);
}

function renderImage() {
    $(".trivia-image").empty();
    var image = $(questions.qAndA[questionIndex].img);
    image.addClass("questionImage");
    $(".trivia-image").append(image);
}

function renderQuestion() {
    if (questionIndex <+ (questions.qAndA.length - 1)) {
        $("#question").text(questions.qAndA[questionIndex].q);
        renderButtons();
        renderImage();
        timer();
    } else {
        $("#time").text("Game Over!");
        $("#question").text("Final Score: " + score + " out of " + questions.qAndA.length);
        $("#buttons").empty();
        $(".trivia-image").empty();
    }
}

function updateScore() {
    $("#score").text("Score: " + score)
}

function timer() {
    clearInterval(timeLeftID);
    timeLeftID = setInterval(decrement, 1000);
}

function decrement() {
    timeLeft--;
    $("#time").html("<h3>Time Remaining: " + timeLeft + "</h3>");
    if (timeLeft === 0) {
        stop();

    }
}

function stop() {
    clearInterval(timeLeftID);
    timeLeft = 30;
    questionIndex++;
    renderQuestion();
}

renderQuestion();
updateScore();