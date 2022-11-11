const sumbit = document.getElementById("sumbit");

const selectContainer = document.querySelector(".select__container");
const options = document.querySelector(".options");
const option = document.querySelectorAll(".option");
const optionText = document.querySelector(".option-text");

let check = true;
selectContainer.addEventListener("click", function () {
  if (check) {
    options.style.display = "block";
    check = false;
  } else {
    options.style.display = "none";
    check = true;
  }
  console.log(check);
});

option.forEach((option) => {
  option.addEventListener("click", function () {
    let value = option.innerText;
    optionText.innerText = value;
    options.style.display = "none";
    check = true;
  });
});

sumbit.addEventListener("submit", function sendEmail(event) {
  event.preventDefault();
  const select = document.getElementById("select");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");
  let params = {
    from_name: name.value,
    select: optionText.innerText,
    Email: email.value,
    PhoneNumber: phone.value,
    message: message.value,
  };
  emailjs
    .send("service_dbjaqia", "template_gbe0l7r", params)
    .then((res) => {
      name.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
      success();
    })
    .catch((err) => {
      error();
    });
});

function success() {
  swal({
    title: "success!",
    text: "successfully sent message",
    icon: "success",
    button: "OK",
  });
}

function error() {
  swal({
    title: "Oops...!",
    text: "something went wrong, message could not be sent!",
    icon: "error",
    button: "OK",
  });
}
