DateFormatter.Danish = Class.create(DateFormatter, {
  // Formats date and time as "20/01/2000 17:00"
  toFormattedString: function(include_time) {
    var str = this.zero_pad(this.date.getDate()) + "/" + this.zero_pad(this.date.getMonth() + 1) + "/" + this.date.getFullYear();

    if (include_time) {
      str += " " + this.date.getHours() + ":" + this.date.getPaddedMinutes();
    }
    return str;
  },

  // Parses date and time as "20/01/2000 17:00"
  parseFormattedString: function(string) {
    var regexp = "([0-9]{2})/([0-9]{2})/([0-9]{4})" +
        "( ([0-9]{1,2}):([0-9]{2})(:([0-9]{2})(.([0-9]{3}))?)?" +
        ")?";
    var d = string.match(new RegExp(regexp, "i"));
    if (d==null) return Date.parse(string); // at least give javascript a crack at it.
    var offset = 0;
    var date = new Date(d[3], 0, 1);
    if (d[2]) { date.setMonth(d[2] - 1); }
    if (d[1]) { date.setDate(d[1]); }
    if (d[4]) {
      hours = parseInt(d[5], 10);
      date.setHours(hours);
    }
    if (d[6]) { date.setMinutes(d[6]); }
    //if (d[8]) { date.setSeconds(d[7]); }
    //if (d[9]) { date.setMiliseconds(Number("0." + d[8]) * 1000); }

    return date;
  }
});
