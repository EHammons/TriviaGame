var questions = {
    qAndA: [{
        q: "What is the name of Jasmine's tiger?",
        img: "<img src=/assets/images/jasmine.jpg></img>",
        ans1: "Rajesh",
        ans2: "Rajah",
        ans3: "Abu",
        ans4: "Sher Kahn"
    }, {
        q: "What are the name's of Cinderella's mice friends?", 
        img: "<img src=/assets/images/cinderella.jpg></img>",
        ans1: "Bianca & Bernard",
        ans2: "Dumb & Dumber",
        ans3: "Jaq & Gus",
        ans4: "George & Lennie"
    }, {
        q: "How old is Snow White?",
        img: "<img src=/assets/images/snow-white.gif></img>",
        ans1: "13",
        ans2: "18",
        ans3: "16", 
        ans4: "14"
    }, {
        q: "How many 'thingamabobs' does Ariel have?",
        img: "<img src=/assets/images/ariel.jpg></img>",
        ans1: "Plenty",
        ans2: "20",
        ans3: "13",
        ans4: "Too Many",
    }, {
        q: "Which princess has the least amount of screen time in her own movie?",
        img: "<img src=/assets/images/princesses.jpg></img>",
        ans1: "Aurora",
        ans2: "Cinderella",
        ans3: "Belle",
        ans4: "Jasmine"
    }, {
        q: "Which character sings the song 'Beauty and the Beast'?",
        img: "<img src=/assets/images/belle.jpg></img>",
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

function renderButtons() {
    $("#buttons").empty();
    var a = $("<button>");
    a.text(questions.qAndA[questionIndex].ans1);
    $("#buttons").append(a);
    var b = $("<button>");
    b.text(questions.qAndA[questionIndex].ans2);
    $("#buttons").append(b);
    var c = $("<button>");
    c.text(questions.qAndA[questionIndex].ans3);
    $("#buttons").append(c);
    var d = $("<button>");
    d.text(questions.qAndA[questionIndex].ans4);
    $("#buttons").append(d);
}

function renderQuestion() {
    if (questionIndex <+ (questions.qAndA.length - 1)) {
        console.log(questions.qAndA[questionIndex].q);
        $("#question").text(questions.qAndA[questionIndex].q);
    } else {
        $("#time").text("Game Over!");
        $("#question").text("Final Score: " + score + " out of " + questions.qAndA.length);
    }
}

function updateScore() {
    $("#score").text("Score: " + score)
}

renderQuestion();
renderButtons();