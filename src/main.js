import ASScroll from "https://cdn.skypack.dev/@ashthornton/asscroll";

const asscroll = new ASScroll({
  customScrollbar: true,
  scrollbarHandleEl: ".my-scrollbar-handle",
  scrollbarStyles: true,
});

window.addEventListener("load", () => {
  asscroll.enable();
});

// Message to devs
console.log("%c How do you do fellow dev? 👋", "color: #00F8F8; font-weight: bold; font-size: 18px;");
console.log("%c Below is a link to this site's GitHub.", "color: #00F8F8; font-size: 15px;");
console.log("%c https://github.com/daviddecorso/portfolio-site-2021", "color: #EC004D;");