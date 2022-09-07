
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

console.log(player1_name);
console.log(player2_name);
player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name;
document.getElementById("player2").innerHTML = player2_name;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = player1_name + "'s turn to question";
document.getElementById("player_answer").innerHTML = player2_name + "'s turn to answer";

function send() {
    fno = document.getElementById("fno").value;
    sno = document.getElementById("sno").value;
    product = parseInt(fno) * parseInt(sno);

    question = fno + " * " + sno;
    qmath = "<h4 id = 'displayword'>" + question + "</h4>";
    inputbox = "<br> <input type = 'number' id = 'ans' class = 'form-control' placeholder = 'answer'>";
    checkbutton = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>";
    row = qmath + inputbox + checkbutton;

    document.getElementById("output").innerHTML = row;
    document.getElementById("fno").innerHTML = "";
    document.getElementById("sno").innerHTML = "";
}

qturn = "player1";
aturn = "player2";

function check() {

    answer = document.getElementById("ans").value;
    if (answer == product) {
        if (aturn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        if (aturn == "player2") {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(qturn == "player1") {
        qturn = "player2";
        document.getElementById("player_question").innerHTML = player1_name + "'s turn to question";;
        document.getElementById("player_answer").innerHTML = player2_name + "'s turn to answer";
    }
    else{
        qturn = "player1";
        document.getElementById("player_question").innerHTML = player2_name + "'s turn to question";
        document.getElementById("player_answer").innerHTML = player1_name + "'s turn to answer";
    }

    localStorage.setItem("player2_score" , player2_score).value;
    document.getElementById("output").innerHTML = "";
}