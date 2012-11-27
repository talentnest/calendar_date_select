Object.extend(String.prototype, {
  zero_pad: function() {
    var number = parseInt(this, 10), str = this;
    if (number < 10) str = "0" + str
    return str.toString();
  }
});
