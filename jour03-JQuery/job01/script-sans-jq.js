const showButton = document.getElementById("showButton");
const hideButton = document.getElementById("hideButton");
const hiddenText = document.getElementById("hiddenText");

showButton.addEventListener("click", function() {
    hiddenText.style.display = "block";
});

hideButton.addEventListener("click", function() {
    hiddenText.style.display = "none";
});
