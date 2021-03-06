//console.log(`lastKey:${lastKey} lastOperator:${lastOperator} state:${state}`);
const helper = {
  isEmpty(value) {
    return (!value || (value.length === 0));
  },

  isDigit(value) {
    return (/^[0-9]+$/.test(value));
  },

  isNumChar(value) {
    return (/^[0-9,]+$/.test(value));
  },

  appendStr(str, appStr) {
    return helper.isEmpty(str) ? appStr : str += appStr;
  },

  isOperator(value) {
    return (/^[+*/=%-]{1}$/.test(value));
  },

  isNumberZero(value) {
    return Number(value) === 0;
  },

  hasValue(value) {
    return value.length > 0;
  },

  commaToPoint(value) {
    //in 15,53
    //out 15.53
    return value.toString().replace(/,/g, '.');
  },

  pointToComma(value) {
    //in 15.53
    //out 15,53
    return value.toString().replace(/\./g, ',');
  },

  isNaN(value) {
    return isNaN(parseFloat(value));
  },

  isInteger(value) {
    return parseInt(value, 10) === value;
  },

  isPositiveNumber(value) {
    return Number(helper.commaToPoint(value)) > 0;
  },

  removeLastChar(value) {
    return value.toString().substring(0, value.length - 1);
  }
};

export default helper;
