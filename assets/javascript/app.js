var stopCounter;
function check() {
    console.log(document.quiz1);
    
    // var answers = ["Hartford", "Albany", "Austin"];
    
    var question1 = $("input[name=answer1]:checked").val();
    var question2 = $("input[name=answer2]:checked").val();
    var question3 = $("input[name=answer3]:checked").val();
    var question4 = $("input[name=answer4]:checked").val();
   
    var correct = 0;
    console.log(question1);

        if (question1 == "Hartford") {
            correct++;
        }

        if (question2 == "Albany") {
            correct++;
        }

        if (question3 == "Austin") {
            correct++;
        }

        if (question4 == "Linus Torvalds") {
            correct++;
        }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";    
    clearInterval(stopCounter);
}

function startgame() {
    document.getElementById("questionscreen").style.display = 'block';
    document.getElementById("startGameBtn").style.display = 'none';
    startTimer(30, document.getElementById("timer"));
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
        stopCounter = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(stopCounter);
            check();
            document.getElementById("DoneBtn").style.display = 'none';
        }
    }, 1000);
}