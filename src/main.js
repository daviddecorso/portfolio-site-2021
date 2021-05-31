const content = document.getElementById("body");

/* const ss = new SmoothScroll({
  container: content,

  threshold: 0.5,

  useRaf: true,

  intertia: 1,
});
 */

import ASScroll from "https://cdn.skypack.dev/@ashthornton/asscroll";

const asscroll = new ASScroll({
  customScrollbar: true,
  scrollbarHandleEl: ".my-scrollbar-handle",
  scrollbarStyles: true,
});

window.addEventListener("load", () => {
  asscroll.enable();
});
