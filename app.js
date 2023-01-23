// all questions must take y/n or yes/no. Use .toUpperCase

function question1() { 

  let q1 = confirm("Did I go to space? y/n");

  if (q1 == true) {
    console.log("Sick");
    document.write("<p>I have not been to space!</p>")
  } else{
    console.log("boo!");
  }
}

function question2() {

  let q2 = prompt("Am I great at Tekken? y/n");

  switch (q2.toLowerCase()) {
    case "yes":
      console.log("Wow!")
      document.write("<p>I am great at tekken!</p>")
        break;
    case "y":
      console.log("Wow!!")
      document.write("<p>I am great at tekken!</p>")
        break;
    case "3":
      console.log("Wow!!!")
        break;
  }
}

function question3() {

  let q3 = prompt("Did I complete my masters degree in quantum bio-engineering? y/n");

  switch (q3.toLowerCase()) {
    case "1":
      console.log("Super!")
        break;
    case "2":
      console.log("Super!!")
        break;
    case "3":
      console.log("Super!!!")
        break;
  }
}

function question4() {

  let q4 = confirm("Was I born in Pretoria, SA? y/n");

  if (q4 == true) {
    console.log("Correct!")
  } else {
    console.log("No!")
  }
}

function question5() {

  let q5 = prompt("One day, I'm gonna become Hokage. Do you belive it?");
  
  switch (q5.toLowerCase()) {
    case "1":
      console.log("Q5 1")
        break;
    case "2":
      console.log("Q5 2")
        break;
    case "3":
      console.log("Q5 3")
        break;
  }
}
   
