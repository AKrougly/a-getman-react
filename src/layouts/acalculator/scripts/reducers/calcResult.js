import Big from "big.js";
import helper from '../model/helper';

function calcResult(numberOne, numberTwo, operation) {
  const one = Big(helper.commaToPoint(numberOne) || "0");
  const two = Big(helper.commaToPoint(numberTwo) || (operation === "/" || operation === '*' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  let result;

	if (operation === "+") {
    result = one.plus(two);
  } else if (operation === "-") {
    result = one.minus(two);
  } else if (operation === "*") {
    result = one.times(two);
  } else if (operation === "/") {
    if (two.eq("0")) {
      //alert("Divide by 0 error");
      result = "0";
    } else {
      result = one.div(two);
    }
  } else {
    throw Error(`Unknown operation '${operation}'`);
  }
  return helper.pointToComma(result.toString());
}

export default calcResult;
