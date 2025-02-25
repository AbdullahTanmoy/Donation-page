document
  .getElementById("btn-donate-now-quota")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyThree = getInputFieldValueBy("add-money-3");

    if (isNaN(addMoneyThree)) {
      alert("Failed to add money");
      return;
    }

    if (addMoneyThree <= 0) {
      alert("Enter positive Number");
      return;
    }

    const collectMoneyThree = getTextFieldValueBy("collected-money3");

    const newBalance = collectMoneyThree + addMoneyThree;

    document.getElementById("collected-money3").innerText = newBalance;

    const mainBalance = getTextFieldValueBy("acc-balance");

    if(addMoneyThree > mainBalance){
        alert('Insufficient balance')
        return;
    }

    const newBalance2 = mainBalance - addMoneyThree;
    document.getElementById("acc-balance").innerText = newBalance2;

    // add to history page
    const div = document.createElement("div");
    div.classList.add(
      "max-w-[1140px]",
      "mx-auto",
      "bg-white",
      "shadow-md",
      "rounded-lg",
      "p-6",
      "border",
      "border-gray-200"
    );
    const p = document.createElement("p");
    p.classList.add("text-lg", "font-semibold", "text-gray-900");
    const span = document.createElement("span");
    span.classList.add("font-bold");
    span.innerText = ` is Donated for Aid for injured in the Quota Movement, Bangladesh`;
    const strong = document.createElement("strong");
    strong.classList.add("font-extrabold", "text-sky-500");
    strong.innerText = addMoneyThree;
    span.prepend(strong);
    p.appendChild(span);
    div.appendChild(p);
    document.getElementById("history-container").appendChild(div);

    // Show modal
    document
      .getElementById("donation-modal")
      .classList.remove("opacity-0", "invisible");
    document
      .getElementById("donation-modal")
      .classList.add("opacity-100", "visible");
  });

// Close the modal
document.getElementById("close-modal").addEventListener("click", function () {
  document
    .getElementById("donation-modal")
    .classList.remove("opacity-100", "visible");
  document
    .getElementById("donation-modal")
    .classList.add("opacity-0", "invisible");
});
