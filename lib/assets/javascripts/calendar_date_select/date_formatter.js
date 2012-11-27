// Base class for date formatters
DateFormatter = Class.create({
  date: null,

  initialize: function(date) {
    this.update(date);
    return this;
  },

  update: function(date) {
    this.date = date;
    return this;
  },

  zero_pad: function (str) {
    return str.toString().zero_pad();
  },

  toFormattedString: function(include_time) {
    var hour, str;
    str = Date.months[this.date.getMonth()] + " " + this.date.getDate() + ", " + this.date.getFullYear();

    if (include_time) { hour = this.date.getHours(); str += " " + this.date.getAMPMHour() + ":" + this.date.getPaddedMinutes() + " " + this.date.getAMPM() }
    return str;
  },

  parseFormattedString: function(string) {
    return new Date(string);
  }
});
