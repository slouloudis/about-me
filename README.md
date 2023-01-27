# about-me

This is a new branch with some changes ahead of main! 
---

let correctAnswers = 0

// make a function called makeQuiz(ID, questions.OBJ)
questions.OBJ - has question inside it. 


make quiz will take two arguments - an empty div and some objects (questionsOBJ)

      do a for loop that looks at our objects and see how many questions there are -
      for each, create 4x elements on an empty div in my html with an ID. 

      elements -
      quiz input
      quiz label
      a submit button
      a form - checks submission is correct


      can use classList.add to add css classes.

      can use .type to set out submit button to a button (use input when making)
      use event.preventDefault() to stop the page from reloading on submit.

      if the submission is correct use alert() (question[i].correct)
        correctAnswers++

append my quiz input, quiz label, and submit button to the form. 
Append form element to root element (htmlID)

//
Call my function (ID,[
The questions.OBJ has: 
                {[Question:1, [A,few,answers], and correct:1]}
                {[Question:2, [A,few,answers], and correct:2]}
                {[Question:3, [A,few,answers], and correct:3]}
                {[Question:4, [A,few,answers], and correct:4]}
])

https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

- Create a "Top Ten" at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish. DONE


- Convert your work experience and education summary into an unordered list using HTML 