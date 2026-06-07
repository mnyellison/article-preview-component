const buttonShare = document.getElementById("button-share");
const shareContainer = document.querySelector(".share-container");

buttonShare.addEventListener("click", () => {
  buttonShare.classList.toggle("active");
  shareContainer.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (!shareContainer.classList.contains("hidden")) {
    if (
      !shareContainer.contains(event.target) &&
      !buttonShare.contains(event.target)
    ) {
      shareContainer.classList.add("hidden");
      buttonShare.classList.remove("active");
    }
  }
});
