let textInput = document.querySelector(".inputs input");
let checkBtn = document.querySelector(".inputs button");
let txtInfo = document.querySelector(".text-info");
let filterText;

checkBtn.addEventListener("click", () => {
  txtInfo.style.display = "block";
  let reverse = filterText.split("").reverse().join("");
  if (filterText == reverse)
    txtInfo.innerHTML = `Yes, "<span>${textInput.value}</span>" is palindrom!`;
  else
    txtInfo.innerHTML = `No, "<span>${textInput.value}</span>" isn't palindrom!`;
});
textInput.addEventListener("keyup", () => {
  filterText = textInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterText) {
    checkBtn.classList.add("active");
  } else checkBtn.classList.remove("active");
});
