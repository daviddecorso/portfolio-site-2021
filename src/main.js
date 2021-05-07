const content = document.getElementById("body");

const ss = new SmoothScroll({
  container: content,

  threshold: 0.5,

  useRaf: true,

  intertia: 1,
});
