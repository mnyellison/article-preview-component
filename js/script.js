const buttonShare = document.getElementById("button-share");
const shareContainer = document.querySelector(".share-container");

buttonShare.addEventListener("click", () => {
  buttonShare.classList.toggle("active");
  shareContainer.classList.toggle("hidden");
});
