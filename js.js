let ques = [
    {
        "que": "What does HTML stand for?",
        "a": "Hyper Text Markup Language",
        "b": "High Tech Markup Language",
        "c": "Home Tool Markup Language",
        "d": "Hyperlinks and Text Markup Language",
        "correct": "a"
    },
    {
        "que": "Which of the following is not a valid way to include JavaScript in an HTML document?",
        "a": "<script src=script.js></script>",
        "b": "<script>console.log(Hello, World!);</script>",
        "c": `javascript src="script.js"></javascript>`,
        "d": "<button onclick=myFunction()>Click me</button>",
        "correct": "c"
    },
    {
        "que": "In CSS, which property is used to change the text color of an element?",
        "a": "text-color",
        "b": "color",
        "c": "font-color",
        "d": "text-style",
        "correct": "b"
    },
    {
        "que": `Which of the following CSS selectors will select all <p> elements that are descendants of an element with class "container"?`,
        "a": ".container p",
        "b": "p .container",
        "c": "container p",
        "d": "p > .container",
        "correct": "a"
    }
]



let idx = 0
let total = ques.length;
let right = 0,
    wrong = 0;
let quebox = document.getElementById("quee")
let optionInput = document.querySelectorAll(".option")
function direct() {
    if(idx === total ){
        return endQuizz()
    }
    reset();
    let data = ques[idx];
    // console.log(data);
    quebox.innerText = `${idx + 1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a
    optionInput[1].nextElementSibling.innerText = data.b
    optionInput[2].nextElementSibling.innerText = data.c
    optionInput[3].nextElementSibling.innerText = data.d
}
let submitQuiz = () => {
    let data = ques[idx];
    let ans = ansCheck();

    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    // not solve
    // let ischeck = document.querySelectorAll("option")
    // if(ischeck.checked){
    //     idx++
    // }
    idx++
    direct();
    return;
}

let ansCheck = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                // console.log("yes");
                answer = input.value
            }


        }
    )

return answer
}

let reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false
        }
    )
}

let endQuizz= ( )=> {
    document.getElementById("box").innerHTML = `
    <div style = "text-align: center;">
    <h3> Thankyou for palying the quizz </h3> <br>
    <h2> THE END </h2> <br>
    <h2> ${right} / ${total} is your Score </h2> 
    </div>`
}

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     submitQuiz()
// } 
// );
direct();




