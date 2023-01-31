
function makeQuiz(ID, greatQuestions) {
  for (let i = 0; i < greatQuestions.length; i++) {
    console.log(greatQuestions[i])
    //create input
    let input = document.createElement("input");
    input.classList.add("quiz--input")

    //create label
    let label = document.createElement("label");
    label.appendChild(document.createTextNode(greatQuestions[i].question)) // give text
    label.classList.add("quiz--label") // add class

    //create submit button
    let submit = document.createElement("input");
    submit.type = 'button'
    submit.classList.add("quiz--btnSubmit")
    submit.addEventListener('click', function() {
      if (input.value == greatQuestions[i].correct) {
        alert(greatQuestions[i].yAlert)
      } else {
        alert(greatQuestions[i].nAlert)
      }
    })

    //create form -- check if correct. 
    let form = document.createElement("form");
    form.addEventListener('submit', function() {
      if (input.value == greatQuestions[i].correct) {
        alert(greatQuestions[i].yAlert)
      } else {
        alert(greatQuestions[i].nAlert)
      }
    }) 
    form.setAttribute("action", "#")
    form.classList.add("quizzzzz")

    form.appendChild(input)
    form.appendChild(label)
    form.appendChild(submit)
    document.getElementById('qID').appendChild(form)
  }
}

makeQuiz("q1ID", [{
  question: " Did I go to space? ╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟy/n ",
  answers: ["yes","no"],
  correct: "no",
  yAlert: "yes!",
  nAlert: "incorrect!",
  },{
  question: " Am I great at Tekken? y/n ",
  answers: ["yes","no"],
  correct: "yes",
  yAlert: "yes!",
  nAlert: "incorrect!",
}
])
