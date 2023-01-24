// all questions must take y/n or yes/no. Use .toUpperCase

let userName = prompt("What is your name?")

function question1() { 

  let q1 = confirm("Did I go to space? y/n");

  if (q1 == true) {
    console.log("Sick");
    console.log(userName)
    document.getElementById('q1ID').innerHTML("<p>I have not been to space!" + userName + "</p>")
    // document.write("<p>I have not been to space!" + userName + "</p>")
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
        break;
    case "y":
      console.log("Wow!!")
      document.write("<p>I am great at tekken!**</p>")
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
        break;
    case "concept art":
    case "concept art/design":
      console.log("Super!!!")
      document.write("<p>It wasn't very effective!</p>")
        break;
    case  (q3==null?"":q3):
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
    document.write("<p>Yes! We moved to mossel bay when I was around 3 or 4 though.</p>")
  } else {
    console.log("No!")
    document.write("<p>Sadly, I wasn't born on Mars </p>")
  }
}

function question5() {
  let q5 = prompt("One day, I'm gonna become Hokage. Do you belive it?");
  
  if (q5 === "y" || q5 === "yes") {
    console.log("hmm")
    document.write("They'll carve my face on a mountain!")
  } else {
    console.log("noo")
    document.write("Have some faith!")
  }
}
   
