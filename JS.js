const MenuBar = document.getElementById("MenuBar");
const closeBtn = document.getElementById("closeBtn");
const slideBarId = document.getElementById("slideBarId");

IsMenuBar = false;

MenuBar.addEventListener("click", () => {
  IsMenuBar = true;
  if (IsMenuBar) {
    slideBarId.classList.add("menuEffect");
    console.log(IsMenuBar);
  }
});

closeBtn.addEventListener("click", () => {
  IsMenuBar = false;
  if (IsMenuBar === false) {
    slideBarId.classList.remove("menuEffect");
    console.log("remove");
  }
});
