const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

const getSignupData = () => {
  const inputName = document.querySelector(".input-name").value;
  const email = document.querySelector(".input-email").value;
  const password = document.querySelector(".input-password").value;

  return { inputName, email, password };
};

const getSigninData = () => {
  const inputSignName = document.querySelector(".input-signin-name").value;
  const inputSignPassword = document.querySelector(".input-signin-password").value;
  console.log(inputSignName, inputSignPassword)
  return { inputSignName, inputSignPassword };
};

const signupData = async () => {
  const { inputName, email, password } = getSignupData();
  await axios.post("http://127.0.0.1:5500/signup/", {
    name: inputName,
    email: email,
    password: password,
  });
};

const signinData = async () => {
  const { inputSignName, inputSignPassword } = getSigninData();
  await axios.post("http://127.0.0.1:5500/signin/", {
    name: inputSignName,
    password: inputSignPassword,
  });
};
