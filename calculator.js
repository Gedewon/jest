class Calculator {
  static add(...input) {
    return input.reduce((accumelator, curent) => accumelator + curent, 0);
  }
  static subtract(...input) {
    return input.reduce((accumelator, curent) => accumelator - curent, 0);
  }
  static divide(...input) {
    return input.reduce((accumelator, curent) => accumelator / curent, 0);
  }
  static multiply(...input) {
    return input.reduce((accumelator, curent) => accumelator * curent, 1);
  }
}
module.exports = Calculator;
