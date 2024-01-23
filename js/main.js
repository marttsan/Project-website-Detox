const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");
    const line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    all_content.forEach((content) => {
      content.classList.remove("active");
    });
    all_content[index].classList.add("active");
  });
});
//  Create Hamburger menu to show after click button

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
