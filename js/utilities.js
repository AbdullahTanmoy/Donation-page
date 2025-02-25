function getInputFieldValueBy(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

function getTextFieldValueBy(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

function showPageBy(id) {
  document.getElementById("Donation-page").classList.add("hidden");
  document.getElementById("history-page").classList.add("hidden");

  // show that id
  document.getElementById(id).classList.remove("hidden");
}

function showBtnChangeBy(id) {
  // Reset both buttons to inactive state
  document
    .getElementById("btn-donation")
    .classList.remove("bg-[#B4F461]", "text-black");
  document
    .getElementById("btn-donation")
    .classList.add("border", "border-gray-400", "text-gray-700");

  document
    .getElementById("btn-history")
    .classList.remove("bg-[#B4F461]", "text-black");
  document
    .getElementById("btn-history")
    .classList.add("border", "border-gray-400", "text-gray-700");

  // Activate the clicked button
  document
    .getElementById(id)
    .classList.remove("border", "border-gray-400", "text-gray-700");
  document.getElementById(id).classList.add("bg-[#B4F461]", "text-black");
}
