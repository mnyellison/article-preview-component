const cardGroup = document.querySelector(".card-group");
const cardProfile = document.querySelector(".card-profile");
const shareToast = document.querySelector(".share-toast");
const shareButton = document.getElementById("share-button");

shareButton.addEventListener("click", () => {
  cardProfile.classList.toggle("hidden");
  shareToast.classList.toggle("hidden");
  shareButton.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!shareToast.classList.contains("hidden")) {
    if (!cardGroup.contains(event.target)) {
      shareButton.classList.remove("active");
      shareToast.classList.add("hidden");
      cardProfile.classList.remove("hidden");
    }
  }
});
