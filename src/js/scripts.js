function changePasswordVisibilty(element) {
  var inputPassword = element.previousElementSibling;

  if (inputPassword.type == "text") inputPassword.type = "password";
  else inputPassword.type = "text";
}

function validateEmail(email) {
  var validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return !email.match(validEmail);
}

function validatePassword(password) {
  var validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  return !password.match(validPassword);
}

function validatePhone(phone) {
  var validPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  return !phone.match(validPhone);
}

function formAlert(object, message) {
  const wrongDiv = document.getElementById(object.id + "-wrong");

  wrongDiv.innerHTML = message;
  object.style.borderColor = "#a50303";
}

function resetInput(input) {
  input.style.borderColor = "#F3F3F3";
  const wrongDiv = document.getElementById(input.id + "-wrong");

  wrongDiv.innerHTML = "";
}

function activateButton() {
  const submitButton = document.getElementById("sign-up-submit-button");
  submitButton.disabled = !submitButton.disabled;
}

function checkAndSubmitForm(event) {
  event.preventDefault();

  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");

  if (!emailInput.value) {
    formAlert(emailInput, "Bu alan boş bırakılamaz");
    return;
  }
  if (!passwordInput.value) {
    formAlert(passwordInput, "Bu alan boş bırakılamaz");
    return;
  }
  if (validateEmail(emailInput.value)) {
    formAlert(emailInput, "Geçersiz E-mail adresi");
    return;
  }
  if (validatePassword(passwordInput.value)) {
    formAlert(passwordInput, "Geçersiz Şifre");
    return;
  }

  form.submit();
}

function checkAndSubmitSignUpForm(event) {
  event.preventDefault();

  const form = document.getElementById("sign-up-form");
  const nameInput = document.getElementById("sign-up-name");
  const surnameInput = document.getElementById("sign-up-surname");
  const emailInput = document.getElementById("sign-up-email");
  const phoneInput = document.getElementById("sign-up-phone");
  const passwordInput = document.getElementById("sign-up-password");
  const passwordAgainInput = document.getElementById("sign-up-password-again");
  const acceptCheckbox = document.getElementById("accept-checkbox");

  if (!nameInput.value) {
    formAlert(nameInput, "Bu alan boş bırakılamaz");
    return;
  }
  if (!surnameInput.value) {
    formAlert(surnameInput, "Bu alan boş bırakılamaz");
    return;
  }
  if (!emailInput.value) {
    formAlert(emailInput, "Bu alan boş bırakılamaz");
    return;
  }
  if (!phoneInput.value) {
    formAlert(phoneInput, "Bu alan boş bırakılamaz");
    return;
  }
  if (!passwordInput.value) {
    formAlert(passwordInput, "Bu alan boş bırakılamaz");
    return;
  }
  if (!passwordAgainInput.value) {
    formAlert(passwordAgainInput, "Bu alan boş bırakılamaz");
    return;
  }

  console.log(surnameInput.value.length);
  if (nameInput.value.length < 3 || nameInput.value.length > 24) {
    formAlert(nameInput, "Ad 3 harften az 24 harften fazla olamaz");
    return;
  }
  if (surnameInput.value.length < 3 || surnameInput.value.length > 24) {
    formAlert(surnameInput, "Soyad 3 harften az 24 harften fazla olamaz");
    return;
  }
  if (validateEmail(emailInput.value)) {
    formAlert(emailInput, "Geçersiz E-mail adresi");
    return;
  }
  if (validatePhone(phoneInput.value)) {
    formAlert(
      phoneInput,
      "Geçersiz Telefon Numarası Başında 0 Olmadan Yazınız"
    );
    return;
  }
  if (validatePassword(passwordInput.value)) {
    formAlert(passwordInput, "Geçersiz Şifre");
    return;
  }
  if (passwordInput.value != passwordAgainInput.value) {
    formAlert(passwordAgainInput, "Şifreler birbiriyle uyuşmamaktadır");
    return;
  }

  if (acceptCheckbox.checked) {
    form.submit();
  }
}
