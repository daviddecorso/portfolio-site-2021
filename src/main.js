import ASScroll from "https://cdn.skypack.dev/@ashthornton/asscroll";

const asscroll = new ASScroll({
  customScrollbar: true,
  scrollbarHandleEl: ".my-scrollbar-handle",
  scrollbarStyles: true,
});

window.addEventListener("load", () => {
  asscroll.enable();
});
