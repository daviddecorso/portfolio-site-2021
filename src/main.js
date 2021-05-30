const content = document.getElementById("body");

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");

const exp1 = document.getElementById("exp1");
const exp2 = document.getElementById("exp2");

let activeTab = exp1;

const ss = new SmoothScroll({
  container: content,

  threshold: 0.5,

  useRaf: true,

  intertia: 1,
});

toggleTabs = () => {
  tab1.classList.toggle("tab-is-active");
  tab1.classList.toggle("tab-is-inactive");
  tab2.classList.toggle("tab-is-active");
  tab2.classList.toggle("tab-is-inactive");
};

toggleExp = (makeActive) => {
  activeTab.classList.toggle("is-hidden");
  makeActive.classList.toggle("is-hidden");
  activeTab = makeActive;
};

tab1.onclick = () => {
  toggleTabs();
  toggleExp(exp1);
};

tab2.onclick = () => {
  toggleTabs();
  toggleExp(exp2);
};
