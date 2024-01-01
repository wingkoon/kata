const bottles = function(money) {
  let buyBottle = Math.floor(money / 2);
  let bottleEarn = Math.floor(buyBottle / 2);
  let capEarn = Math.floor(buyBottle / 4);
  let bottle = buyBottle + bottleEarn + capEarn;
  let bottleComp = buyBottle;
  let gap = 100;
  while (bottle > bottleComp) {
    bottleComp = bottle;
    bottleEarn = Math.floor(bottle / 2);
    capEarn = Math.floor(bottle / 4);
    bottle = buyBottle + bottleEarn + capEarn;
  }
  console.log("Total Bottles: ", bottle);
  console.log("Remaining Bottles: ", bottle - Math.floor(bottle / 2)*2);
  console.log("Remaining Caps: ", bottle - Math.floor(bottle / 4) * 4);
  console.log("Total Earned:");
  console.log("  Bottles: ", bottleEarn);
  console.log("  Caps: ", capEarn);
  return bottle;
};

bottles(40);