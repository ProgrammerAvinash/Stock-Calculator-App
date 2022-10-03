let initialPrice = document.querySelector(".initailPriceInput");
let qtyStock = document.querySelector(".qtyStockInput");
let currentPrice = document.querySelector(".currentPriceInput");
let btnVlaue = document.querySelector(".btn");
let ResultValue = document.querySelector(".result");

function onBtnClicked() {
  let initialPriceValue = Number.parseInt(initialPrice.value);
  let qtyStockValue = Number.parseInt(qtyStock.value);
  let currentPriceValue = Number.parseInt(currentPrice.value);
  //   console.log(initialPriceValue);
  //   console.log(qtyStockValue);
  //   console.log(currentPriceValue);

  if (initialPriceValue > currentPriceValue) {
    console.log("if");

    var lossValue = initialPriceValue - currentPriceValue;
    var lossTotal = lossValue * qtyStockValue;
    var lossPercentage = (lossValue / initialPriceValue) * 100;
    var resultToPrint = `Your Loss is ${lossTotal} & Loss Percent is ${lossPercentage}%`;
    // console.log(ResultValue);
  } else if (currentPriceValue > initialPriceValue) {
    console.log("elseif");
    var profitValue = currentPriceValue - initialPriceValue;
    var profitTotal = profitValue * qtyStockValue;
    var profitPercentage = (profitValue / currentPriceValue) * 100;

    resultToPrint = `Your Profit is ${profitTotal} & Profit Percent is ${profitPercentage}%`;
    console.log(ResultValue);
  } else {
    ResultValue = "Please Wait For the Market to Move";
  }
  //   console.log("outside", ResultValue);
  ResultValue.innerText = resultToPrint;
}

btnVlaue.addEventListener("click", onBtnClicked);
