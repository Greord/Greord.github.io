let b = 0;
let QuestionSet = [];
let Question, CurrentQuestion, CurrentA1, IsA1, CurrentA2, IsA2, CurrentA3, IsA3, CurrentA4, IsA4;
function NextQuestion(){
    CurrentQuestion = document.getElementById("Question").value;
    CurrentA1 = document.getElementById("A1").value
    IsA1 = document.getElementById("IsA1Correct").checked;
    CurrentA2 = document.getElementById("A2").value;
    IsA2 = document.getElementById("IsA2Correct").checked;
    CurrentA3 = document.getElementById("A3").value;
    IsA3 = document.getElementById("IsA3Correct").checked;
    CurrentA4 = document.getElementById("A4").value;
    IsA4 = document.getElementById("IsA4Correct").checked;
    Question = [CurrentQuestion, CurrentA1, CurrentA2, CurrentA3, CurrentA4, IsA1, IsA2, IsA3, IsA4];
    document.getElementById("Question").value = '';
    document.getElementById("A1").value = '';
    document.getElementById("A2").value = '';
    document.getElementById("A3").value = '';
    document.getElementById("A4").value = '';
    document.getElementById("IsA1Correct").checked = false;
    document.getElementById("IsA2Correct").checked = false;
    document.getElementById("IsA3Correct").checked = false;
    document.getElementById("IsA4Correct").checked = false;
    QuestionSet.push(Question);
    console.log(QuestionSet);
}

function ExportSet(){
    NextQuestion();
    let SetString = "";
    for (i=0; i < QuestionSet.length; i = i + 1){
        for (b=0; b < QuestionSet[i].length; b = b + 1){
           SetString += QuestionSet[i][b];
           SetString += "**";
        }
        SetString += ";;";
    }
    SetString += "!!";
    document.getElementById("body").innerHTML = `<h1 class='BlueBlock'>Your Quesion Set: ${SetString} <br>Also, your set link</h1><a href='WordPuzzles/Games.html?set=${SetString}'>Click Here!</a>`
}

function InportSet(SetString){
    let QS = SetString.split(";;");
    for (i=0; i < QS.length; i++){
        QS[i] = QS[i].split("**");
        QS[i].pop();
    }
    QS.pop();
    return QS;
}




