export default class Validator {
  static validateUsername(str) {
    let validate = false;
    const regExSymbols = /^[^\d_-][A-Z_\d-]+[^\d_-]$/i;
    const regExRepeatDigit = /\D\d{4,}\D/;
    if (regExSymbols.test(str) && !regExRepeatDigit.test(str)) {
      validate = true;
    }
    return validate;
  }
}
