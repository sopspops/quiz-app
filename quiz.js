let status = 0;
let correct = 0;
let test, test_status, question, option, options, opA, opB, opC;

let questions = [
  {
      question: "What is the HTML tag under which one can write the JavaScript code?",
      a: "javascript",
      b: "script",
      c: "js",
      answer: "B"
    },
  {
      question: "Which of the following is the correct syntax to display “Hello Sophie” in an alert box using JavaScript?",
      a: "alert('Hello Sophie');",
      b: "msgbox('Hello Sophie');",
      c: "alertbox('Hello Sophie');",
      answer: "A"
    },
  {
      question: "Which of the following is not a reserved word in JavaScript?",
      a: "interface",
      b: "throws",
      c: "program",
      answer: "C"
    },
    {
        question: "Which function of an Array object calls a function for each element in the array?",
        a: "forEvery()",
        b: "forEach()",
        c: "each()",
        answer: "B"
    },
    {
        question: "JavaScript is a ________ Side Scripting Language.",
        a: "Server",
        b: "Browser",
        c: "ISP",
        answer: "B"
     },
];

get = (x) => {
  return document.getElementById(x);
};


renderQuestion = () => {
  test = get("test");
  if (status >= questions.length) {
    test.innerHTML = "<h2>You got " + correct + " of " + questions.length+ " questions correct</h2>";
    get("test_status").innerHTML = "";
    get("title").innerHTML = "Quiz completed :-)";
    status = 0;
    correct = 0;
    return false;
  }

  get("test_status").innerHTML = "Question " + (status + 1) + " of " + questions.length;
  
  question = questions[status].question;
  opA = questions[status].a;
  opB = questions[status].b;
  opC = questions[status].c;

  test.innerHTML = "<h2>" + question + "</h2>";
  test.innerHTML += "<label><input type='radio' name='options' value='A'> " + opA + "</label><br>";
  test.innerHTML += "<label><input type='radio' name='options' value='B'> " + opB + "</label><br>";
  test.innerHTML += "<label><input type='radio' name='options' value='C'> " + opC + "</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Next</button>";
}

checkAnswer = () => {
  options = document.getElementsByName("options");
  for (var i = 0; i < options.length; i++){
    if (options[i].checked) {
      option = options[i].value;
    }
  }
  if (option == questions[status].answer) {
    correct++;
  }
  status++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion);