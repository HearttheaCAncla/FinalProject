function vid() { 
    desc.innerHTML = "<video src='vids/learnmore.mp4' width='640' height='360' controls> your browser does not support html5 video</video>"
}

const questions = ["1. What is SDG 2?", "2. What is the primary cause of hunger worldwide?",
    "3. What is a sustainable solution to ending hunger?", "4. What is the deadline set by the United Nations to achieve Zero Hunger?",
    "5. How do wars and conflicts contribute to world hunger?"];

const op1 = ["No poverty", "A lack of food globally", "By increasing food production while preserving natural resources", "2025",
    "It lowers food prices for affected areas "];

const op2 = ["Zero hunger", "Lack of advanced farming technology", "By making all farms fully automated", "2050", "It decreases funds on food production"];

const op3 = ["Clean water and sanitation", "Poverty, conflict, and inequality", "By eliminating the need for farmers altogether", "2100",
    "It makes food cheaper due to less demand"];

const op4 = ["Good health and well-being", "Not enough land available for farming", "By focusing only on growing high-profit cash crops",
    "2030", "They displace people and destroy food supplies"];

let index = 0;
let score = 0;

function display() {
    var x = document.getElementById("nxt"); 
    x.style.display = "none";
    
    document.getElementById("question").innerHTML = questions[index];
    document.getElementById("op1").innerHTML = op1[index];
    document.getElementById("op2").innerHTML = op2[index];
    document.getElementById("op3").innerHTML = op3[index];
    document.getElementById("op4").innerHTML = op4[index];
    index++;

    if (index==5) {
        document.getElementById("nxt").innerHTML = "Submit";
    }

    else if (index>5) {
        document.getElementById("qna").style.display = "none";
        document.getElementById("score").innerHTML = "Quiz completed! Your Score is: " + score;
    }
    reset();
}

function result(op) {
    var x = document.getElementById("nxt"); 
    x.style.display = "block";

    switch(index) {
        case 1:
            var ans = 2;
            break;
        
        case 2:
            var ans = 3;
            break;

        case 3:
            var ans = 1;
            break;

        case 4:
            var ans = 4;
            break;
 
        case 5:
            var ans = 4;
            break;
    }

    if (op == ans) {
        document.getElementById("op" + op).style.backgroundColor = "#77bfa3";
        score+=1;
    }

    else {
        document.getElementById("op" + op).style.backgroundColor = "#d47777";
        document.getElementById("op" + ans).style.backgroundColor = "#77bfa3";
    }

    disable();
    
}

function disable() {
    for (let i=1; i<=4; i++) {
        document.getElementById("op" + i).style.cursor = "not-allowed";
    }
}

function reset() {
    for (let i=1; i<=4; i++) {
        document.getElementById("op" + i).style.cursor = "pointer";
        document.getElementById("op" + i).style.backgroundColor = "#b0a9a5";
    }
}

