document
  .getElementById("btn-donate-now-feni")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyTwo = getInputFieldValueBy("add-money-2");

    if (isNaN(addMoneyTwo)) {
      alert("Failed to add money");
      return;
    }

    if (addMoneyTwo <= 0) {
      alert("Enter positive Number");
      return;
    }

    const collectMoneyTwo = getTextFieldValueBy("collected-money2");

    const newBalance = collectMoneyTwo + addMoneyTwo;

    document.getElementById("collected-money2").innerText = newBalance;

    const mainBalance = getTextFieldValueBy("acc-balance");

    if(addMoneyTwo > mainBalance){
        alert('Insufficient balance')
        return;
    }

    const newBalance2 = mainBalance - addMoneyTwo;
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
    span.innerText = ` is Donated for Flood Relief in Feni, Bangladesh`;
    const strong = document.createElement("strong");
    strong.classList.add("font-extrabold", "text-green-500");
    strong.innerText = addMoneyTwo;
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
