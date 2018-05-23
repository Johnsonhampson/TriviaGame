$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var clock = 10;

    $("#game").hide();
    $("#results").hide();

    $("#start").click(function run() {
        $("#startdiv").hide();
        displayTrivia();
        intervalId = setInterval(decrement, 1000);
    });

    function decrement() {
        clock--;
        $("#time").html("Time remaining: " + clock + " seconds");
        if (clock == 0) {
            stop();
        }
    }

    function displayTrivia() {
        $("#game").show();
    }

    function stop() {
        clearInterval(intervalId);
        scoreboard();
    }

    $("#submit").click(function submit() {
        scoreboard();
        clearInterval(intervalId);
    });

    function scoreboard(){
        $("#questions").hide();
        $("#results").show();
        ques1();
        ques2();
        ques3();
        ques4();
        ques5();
        ques6();
        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
        $("#noanswer").text(unanswered);

        //var q1 = document.getElementsByName("q1").value;
        //var q2 = document.getElementsByName("q2").value;
        //var q3 = document.getElementsByName("q3").value;
        //var q4 = document.getElementsByName("q4").value;
        //var q5 = document.getElementsByName("q5").value;
        //var q6 = document.getElementsByName("q6").value;

    }

    function ques1() {
        var q1 = $('input[name="q1"]:checked').val();
        console.log(q1);
        if (q1 === "Jupiter") {
            correct++;
            return correct;  
        }
        else if (typeof q1 == "undefined") {
            unanswered++;
            return unanswered;
        }
        else {
            incorrect++;
            return incorrect;
        }
    }

    function ques2() {
        var q2 = $('input[name="q2"]:checked').val();
        console.log(q2);
        //var q2 = $("input:radio[name=q2]:checked").val();
        if (q2 === "45") {
            correct++;
            return correct;
        }
        else if (typeof q2 == "undefined") {
            unanswered++;
            return unanswered;
        }
        else {
            incorrect++;
            return incorrect;
        }
    }
    function ques3() {
        var q3 = $('input[name="q3"]:checked').val();
        console.log(q3);
        if (q3 === "Pod") {
            correct++;
            return correct;
        }
        else if (typeof q3 == "undefined") {
            unanswered++;
            return unanswered;
        }
        else {
            incorrect++;
            return incorrect;
        }
    }
    function ques4() {
        var q4 = $('input[name="q4"]:checked').val();
        console.log(q4);
        if (q4 === "AlexanderFleming") {
            correct++;
            return correct;
        }
        else if (typeof q4 == "undefined") {
            unanswered++;
            return unanswered;
        }
        else {
            incorrect++;
            return incorrect;
        }
    }
    function ques5() {
        var q5 = $('input[name="q5"]:checked').val();
        console.log(q5);
        if (q5 === "12") {
            correct++;
            return correct;
        }
        else if (typeof q5 == "undefined") {
            unanswered++;
            return unanswered;
        }
        else {
            incorrect++;
            return incorrect;
            
        }
    }
    function ques6() {
        var q6 = $('input[name="q6"]:checked').val();
        console.log(q6);
        if (q6 === "Real") {
            correct++;
            return correct;
        }
        else if (typeof q6 == "undefined") {
            unanswered++;
            return unanswered;
        }
        else {
            incorrect++;
            return incorrect;
            console.log(incorrect);
        }
    }

});