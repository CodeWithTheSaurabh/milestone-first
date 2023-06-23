const submitButton = document.getElementById("btn-btn");
const attention = document.getElementById("attention");

submitButton.addEventListener("click", () => {
  //those id you wanted to target inside the event listner it is mandatory to use inside it. if you will use outside it will not work
  const pswd = document.getElementById("psw").value;
  const email = document.getElementById("myEmail").value;
  if (email.includes("@") && pswd.length >= 8) {
    attention.innerText = "Valid email and password!";
    attention.className = "message-success";
  } else {
    attention.innerText = "Invalid email or password!";
    attention.className = "error-message";
  }
});

console.log(submitButton);


