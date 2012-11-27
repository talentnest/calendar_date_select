DateFormatter.Finnish = Class.create(DateFormatter, {
  getAMPMHour: function () {
    var hour = this.zero_pad(this.date.getHours());
    return (hour == null) ? 00 : (hour > 24 ? hour - 24 : hour )
  },

  toFormattedString: function (include_time) {
    var str = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear();
    if (include_time) {
      hour = this.date.getHours();
      str += " " + this.date.getAMPMHour() + ":" + this.date.getPaddedMinutes()
    }
    return str;
  },

  parseFormattedString: function (string) {
    var regexp = '([0-9]{1,2})\.(([0-9]{1,2})\.(([0-9]{2,4})( ([0-9]{1,2}):([0-9]{2})? *)?)?)?';
    var d = string.match(new RegExp(regexp, "i"));
    if (d == null) return Date.parse(string); // at least give javascript a crack at it.
    var offset = 0;
    if (d[5] && d[5].length == 2) {
      // we got only two digits for the year...
      d[5] = Number(d[5]);
      if (d[5] > 30)
        d[5] += 1900;
      else
        d[5] += 2000;
    }
    var date = new Date(d[5], 0, 1);
    if (d[3]) { date.setMonth(d[3] - 1); }
    if (d[5]) { date.setDate(d[1]); }
    if (d[7]) { date.setHours(parseInt(d[7], 10)); }
    if (d[8]) { date.setMinutes(d[8]); }
    if (d[10]) { date.setSeconds(d[10]); }
    return date;
  }
});
