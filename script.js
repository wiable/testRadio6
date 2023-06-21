var subscriptionRadio = document.getElementById("calendly-subscription");
var freeRadio = document.getElementById("free-calendly");
var oneAdditionalLanguage = document.getElementById("one-additional-language");
var twoAdditionalLanguage = document.getElementById("two-additional-language");
var threeAdditionalLanguage = document.getElementById(
  "three-additional-language"
);
var fourAdditionalLanguage = document.getElementById(
  "four-additional-language"
);
var fiveAdditionalLanguage = document.getElementById(
  "five-additional-language"
);

var totalAmount = document.getElementById(
  "total-amount"
);

subscriptionRadio.addEventListener("click", function () {
  updateTotalAmount();
});

freeRadio.addEventListener("click", function () {
  updateTotalAmount();
});

oneAdditionalLanguage.addEventListener("click", function () {
  updateTotalAmount();
});

twoAdditionalLanguage.addEventListener("click", function () {
  updateTotalAmount();
});

threeAdditionalLanguage.addEventListener("click", function () {
  updateTotalAmount();
});

fourAdditionalLanguage.addEventListener("click", function () {
  updateTotalAmount();
});

fiveAdditionalLanguage.addEventListener("click", function () {
  updateTotalAmount();
});

function updateTotalAmount() {
  var amount = 0;

  if (subscriptionRadio.checked || freeRadio.checked) {
    amount = 500;
  }

  if (oneAdditionalLanguage.checked) {
    amount += 500;
  }

  if (twoAdditionalLanguage.checked) {
    amount += 1000;
  }

  if (threeAdditionalLanguage.checked) {
    amount += 1500;
  }

  if (fourAdditionalLanguage.checked) {
    amount += 2000;
  }

  if (fiveAdditionalLanguage.checked) {
    amount += 2500;
  }

  totalAmount.textContent = amount;
}
