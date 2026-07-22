window.onload = function () {
  console.log("FutureCare AI Website Loaded Successfully!");
};
function welcomeMessage() {
  alert("Welcome to FutureCare Ai! Explore how Artificial Intelligence is transforming healthcare.");
}
const answers = ["b","a","b","b","c"];

function checkQuiz(){

    let score = 0;

    for(let i=1;i<=5;i++){

        let selected = document.querySelector('input[name="q'+i+'"]:checked');

        if(selected){

            if(selected.value === answers[i-1]){

                score++;

            }

        }

    }

    let message="";

    if(score===5){

        message=" Excellent! Score: 5/5";

    }

    else if(score>=3){

        message=" Good Job! Score: "+score+"/5";

    }
    else{

        message="Keep Learning! Score: "+score+"/5";

    }
    document.getElementById("result").innerHTML=message;

}

function resetQuiz(){

    document.querySelectorAll("input[type='radio']").forEach(radio=>radio.checked=false);

    document.getElementById("result").innerHTML="";

}
