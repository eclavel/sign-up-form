const form = document.getElementById("form-container");
form.addEventListener("submit", (event) => {
  const password = document.getElementById("password").value;
  const confrimPassword = document.getElementById("confirm-pass").value;
  console.log(password);
  console.log(confrimPassword);
  if (password === confrimPassword) {
    alert("Created account successfully");
  } else if (password !== confrimPassword) {
    alert("Password mismatch");
    //prevent the form from sending
    event.preventDefault();
  }
});
