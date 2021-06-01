const content = document.getElementById("body");

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");

const exp1 = document.getElementById("exp1");
const exp2 = document.getElementById("exp2");
const exp3 = document.getElementById("exp3");

let activeExp = exp1;
let activeTab = tab1;

toggleExp = (makeActive, makeTabActive) => {
  activeExp.classList.toggle("is-hidden");
  makeActive.classList.toggle("is-hidden");

  activeTab.classList.toggle("tab-is-active");
  activeTab.classList.toggle("tab-is-inactive");

  makeTabActive.classList.toggle("tab-is-active");
  makeTabActive.classList.toggle("tab-is-inactive");

  activeExp = makeActive;
  activeTab = makeTabActive;
};

tab1.onclick = () => {
  toggleExp(exp1, tab1);
};

tab2.onclick = () => {
  toggleExp(exp2, tab2);
};

tab3.onclick = () => {
  toggleExp(exp3, tab3);
};
