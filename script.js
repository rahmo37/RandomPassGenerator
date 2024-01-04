const passBox = document.getElementById("password");
const length = 14;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passBox.value = password;
}

function copyPassword() {
  if (passBox.value !== "") {
    // The .select() method highlights all the text inside this element, making it ready for copying.
    passBox.select();

    // The execCommand method is a part of the Document interface, and "copy" is a command that copies the current selection to the clipboard. The success of this operation depends on whether the text is selected and whether the browser supports this command.
    document.execCommand("copy");
    setTimeout(function() {
     alert("Password copied!");
    }, 100); 
    
  } else {
    alert("Generate a password first!");
  }
}
