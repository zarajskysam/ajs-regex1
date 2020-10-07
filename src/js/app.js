export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return (this.validateUsernameStr() && this.validateUsernameNum());
  }

  validateUsernameStr() {
    return (/^[a-zA-Z]+[a-zA-Z0-9]+[a-zA-Z]$/.test(this.name));
  }

  validateUsernameNum() {
    return (!/\d{4}/.test(this.name));
  }
}
