function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  if (startPriceOld >= startPriceNew) {
    return [0,Math.round(startPriceOld-startPriceNew)]
  }
  let total = 0;
  let months = 0;
  let oldCar = startPriceOld;
  let newCar = startPriceNew
  let monthlySavings = savingperMonth;
  let moneyLoss = percentLossByMonth;
  
  while ((total + oldCar) < newCar) {
    months++;
    if (months % 2 === 0) {
      moneyLoss+=0.5;
    }
    total += monthlySavings;
    oldCar -= oldCar * (moneyLoss / 100);
    newCar -= newCar * (moneyLoss / 100);
  }
  return [months,Math.round(total+oldCar-newCar)]
}