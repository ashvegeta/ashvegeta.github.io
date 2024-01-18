var style = getComputedStyle(document.body);
var white = style.getPropertyValue("--white");
var txtColor = style.getPropertyValue("--text-color");
const defaultFontSize = Number(
  window
    .getComputedStyle(document.body)
    .getPropertyValue("font-size")
    .match(/\d+/)[0]
);

const div = ".side-content .info #menu-header a";
const MenuList = document.querySelectorAll(div);

MenuList.forEach((element) => {
  element.addEventListener("click", () => {
    MenuList.forEach((otherElements) => {
      otherElements.style.color = white;
      otherElements.parentElement.style.fontSize = "medium";
      otherElements.parentElement.style.marginLeft = "0rem";
    });
    element.style.color = txtColor;
    element.parentElement.style.fontSize = "larger";
    element.parentElement.style.marginLeft = "1rem";
  });
});
