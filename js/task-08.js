const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const [email, password] = form.elements;
  if (!email.value || !password.value) {
    return alert("Все поля должны быть заполнены");
  }
  console.log({ email: email.value, password: password.value });
});
