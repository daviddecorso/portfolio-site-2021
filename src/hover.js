ds = document.getElementById("data-scientist");

introBodyText = document.getElementById("intro-body-text");
introBody = document.getElementById("intro-body");

dataIntroBody = document.getElementById("data-intro-body-text");

ds.onmouseenter = (e) => {
  introBodyText.classList.toggle("is-hidden");
  introBody.classList.toggle("is-hidden");
  dataIntroBody.classList.toggle("is-hidden");
  e.target.style.backgroundColor = "white";
  e.target.style.color = "var(--bg-color)";
};

ds.onmouseleave = (e) => {
  introBodyText.classList.toggle("is-hidden");
  introBody.classList.toggle("is-hidden");
  dataIntroBody.classList.toggle("is-hidden");
  e.target.style.backgroundColor = "var(--transparent)";
  e.target.style.color = "var(--text-color)";
};
