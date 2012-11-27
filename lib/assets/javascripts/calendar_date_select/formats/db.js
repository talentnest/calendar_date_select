// DB No Seconds Format: 2007-12-05 12:00

DateFormatter.DB = Class.create(DateFormatter, {
  toFormattedString: function(include_time) {
    var str = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.zero_pad(this.date.getDate());
    if (include_time) {
      hour = this.date.getHours();
      str += " " + this.getAMPMHour() + ":" + this.date.getPaddedMinutes()
    }

    return str;
  },

  getAMPMHour: function() {
    var hour = this.zero_pad(this.date.getHours());
    return (hour == null) ? 00 : (hour > 24 ? hour - 24 : hour )
  },

  parseFormattedString: function (string) {
    var regexp = '([0-9]{4})-(([0-9]{1,2})-(([0-9]{1,2})( ([0-9]{1,2}):([0-9]{2})? *)?)?)?';
    var d = string.match(new RegExp(regexp, "i"));
    if (d==null) return Date.parse(string); // at least give javascript a crack at it.
    var offset = 0;
    var date = new Date(d[1], 0, 1);
    if (d[3]) { date.setMonth(d[3] - 1); }
    if (d[5]) { date.setDate(d[5]); }
    if (d[7]) {
      date.setHours(parseInt(d[7], 10));
    }
    if (d[8]) { date.setMinutes(d[8]); }
    if (d[10]) { date.setSeconds(d[10]); }
    return date;
  }
})