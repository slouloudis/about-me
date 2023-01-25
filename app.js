// all questions must take y/n or yes/no. Use .toUpperCase

let total = 0
let userName = prompt("What is your name?")

function question1() { 

  let q1 = confirm("Did I go to space? ╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟy/n");

  if (q1 == true) {
    console.log("Sick");
    // console.log(userName)
    document.getElementById('q1ID').innerHTML ="<p>I have not been to space, " + userName + "! </p>"
    // document.write("<p>I have not been to space!" + userName + "</p>")
    total++
  } else{
    console.log("boo!");
    document.write("<p>One day we'll go, " + userName + "</p>")
  }
}

function question2() {

  let q2 = prompt("Am I great at Tekken? y/n");

  switch (q2.toLowerCase()) {
    case "yes":
      console.log("Wow!")
      document.write("<p>I am great at tekken!**</p>")
      total++
        break;
    case "y":
      console.log("Wow!!")
      document.write("<p>I am great at tekken!**</p>")
      total++
        break;
    case "no":
      console.log("Wow!!!")
      document.write("<p>You're kinda correct - I'm not very good compared to people at my local</p>")
        break;
    case  (q2==null?"":q2):
      default:
        console.log("null")
        document.write("<p> Hey! You didn't input a value</p>")
        break;
  }
}

function question3() {

  let q3 = prompt("Did I complete my masters degree in quantum bio-engineering? y/n");

  switch (q3.toLowerCase()) {
    case "yes":
    case "y":
    case null:
      console.log("Super!")
      document.write("<p>That sounds super made up! Maybe in another universe...</p>")
        break;
    case "no":
      console.log("Super!!")
      document.write("<p>Correct! It was in art</p>")
      total++
        break;
    case "concept art":
    case "concept art/design":
      console.log("Super!!!")
      document.write("<p>It wasn't very effective!</p>")
      total++
        break;
    // case  (q3==null?"":q3):
    case "":
      default:
        console.log("null")
        document.write("<p> Hey! You didn't input a value</p>")
        break;
  }
}

function question4() {

  let q4 = confirm("Was I born in Pretoria, SA? y/n");

  if (q4 == true) {
    console.log("Correct!")
    document.write("<p>Yes! We moved to mossel bay when I was around 3 or 4 though.</p>");
    total++
  } else {
    console.log("No!")
    document.write("<p>Sadly, I wasn't born on Mars </p>");
  }
}

function question5() {
  let q5 = prompt("One day, I'm gonna become Hokage. Do you belive it? (҂◡_◡) ᕤ");
  
  if (q5 === "y" || q5 === "yes") {
    console.log("hmm")
    document.write("They'll carve my face on a mountain!");
    total++
  } else {
    console.log("noo")
    document.write("Have some faith!");
  }
}

// this changes everytime so good luck lol
function question6() {
  let numberGame = prompt("Guess a number! Between 1-10 ┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿");
  let correctNumber = Math.floor(Math.random() * 11);
  // correctNumber = 5

  if (numberGame < correctNumber) {
    alert("Too low!");
    document.write("You guessed the number wrong!")
    return false;
  } else if (numberGame > correctNumber) {
    alert("Too high!");
    document.write("You guessed the number wrong!")
    return false;
  } else if (isNaN(numberGame)) {
    alert("That isn't a number!")
    document.write("You didn't input a number!")  
  } else {
    alert("That's correct!")
    document.write("You guessed my number right! ┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿")
    total++
  }
}

// function question7() {
//     //Add a 7th question that has multiple possible correct answers that are stored in an array.
//     // Give the user 6 attempts to guess the correct answer.
//     answers = ["red", "blue", "green","yellow", "brown", "orange","purple","pink","magenta","skyblue"]
//     attempts = 6
//     for (let i = 0; i < 6; i++){
//       userAnswer = prompt("Guess one of the colours I'm thinking of! You have 6 attempts ☜(⌒▽⌒)☞")
//       console.log(i)
//       if (userAnswer.toLowerCase() == answers[0] || userAnswer.toLowerCase() == answers[5] || userAnswer.toLowerCase() == answers[8]) { 
//           alert("Yep! " + userAnswer + " was one of the colours I was thinking of. Don't you hate that we have to spell colour 'color' in css?!?");
//           document.write("You guessed my colour right! ✌(-‿-)✌")
//           return false;
//       } else {
//         --attempts
//         alert("Try again! You have " + attempts + " attempts left")
//         console.log("attempt i number" + attempts)
//         if (attempts == 0){
//           document.write("You ran out of attempts! Reload the page to try again. PS (One of the possible answers was 'red'!")
//         }
//       }
//     }
// }

function question7() {
  // create array with multiple correct stored answers.
  let answers = ["red", "orange", "magenta"]
  let correct = false
  let userAnswer = null
  attempts = 6
  // ask the user the q and then check if it is correct. 

  for (let i = 0; i < 6; i++) {
    userAnswer = prompt("Guess one of the colours I'm thinking of! You have " + attempts + " attempts ☜(⌒▽⌒)☞") 
    for (let j = 0; j < answers.length; j++) { //nested loop to check if the user input matches one of the answers
      if (userAnswer.toLowerCase() == answers[j]) {
        correct = true
      }
    }
    if (correct == true) {
      break; //breaks out of the i for loop on 159 to go to line 178
    }
    --attempts //decrement attempts if they havn't gotten it correct. Line 170 then checks if it was your last guess
    if (attempts == 0) {
      alert("Sorry! That was your last guess. (╥﹏╥)")
      break;
    }
    alert("Try again! You have " + attempts + " extra lives left") //tells user how many attempts they have
    console.log(attempts)
  }
  
  if (correct == true) {
    alert("Yep! " + userAnswer + " was one of the colours I was thinking of. Don't you hate that we have to spell colour 'color' in css?!?");
    document.write("You guessed my colour right! ✌(-‿-)✌")
    total++
  } else {
    document.write("You ran out of attempts! Reload the page to try again. PS (One of the possible answers was 'red'!")
  }
  alert("Ö You got " + total + " questions correct (๑•́ ヮ •̀๑) ")
}
