let initialPrice = document.querySelector(".initailPriceInput");
let qtyStock = document.querySelector(".qtyStockInput");
let currentPrice = document.querySelector(".currentPriceInput");
let btnVlaue = document.querySelector(".btn");
let ResultValue = document.querySelector(".result");

function onBtnClicked() {
  let initialPriceValue = Number(initialPrice.value);
  let qtyStockValue = Number(qtyStock.value);
  let currentPriceValue = Number(currentPrice.value);
  console.log(initialPriceValue);
  console.log(qtyStockValue);
  console.log(currentPriceValue);

  if (initialPriceValue == 0 || qtyStockValue == 0) {
    resultToPrint = "please Enter valid input";
  } else if (initialPriceValue > currentPriceValue) {
    console.log("if");

    var lossValue = initialPriceValue - currentPriceValue;
    var lossTotal = lossValue * qtyStockValue;
    var lossPercentage = (lossTotal / initialPriceValue) * 100;
    var resultToPrint = `Your Loss is ${lossTotal} & Loss Percent is ${lossPercentage}%`;
    // console.log(ResultValue);
  } else if (currentPriceValue > initialPriceValue) {
    console.log("elseif");
    var profitValue = currentPriceValue - initialPriceValue;
    var profitTotal = profitValue * qtyStockValue;
    var profitPercentage = (profitTotal / initialPriceValue) * 100;

    resultToPrint = `Your Profit is ${profitTotal} & Profit Percent is ${profitPercentage}%`;
    console.log(ResultValue);
  } else if (initialPriceValue == currentPriceValue) {
    resultToPrint = "Please Wait For the Market to Move";
  } else {
    resultToPrint = "please Enter valid input";
  }
  ResultValue.innerText = resultToPrint;
  //   console.log("outside", ResultValue);
}

btnVlaue.addEventListener("click", onBtnClicked);
