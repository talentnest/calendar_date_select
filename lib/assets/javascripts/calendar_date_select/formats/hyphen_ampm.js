DateFormatter.HyphenAMPM = Class.create(DateFormatter, {
  // Formats date and time as "2000/01/20 17:00"
  toFormattedString: function(include_time){
    var str = this.date.getFullYear() + "-" + this.zero_pad(this.date.getMonth() + 1) + "-" + this.zero_pad(this.date.getDate());

    if (include_time) { hour=this.date.getHours(); str += " " + this.date.getAMPMHour() + ":" + this.date.getPaddedMinutes() + " " + this.date.getAMPM() }
    return str;
  },

  // Parses date and time as "2000/01/20 17:00"
  parseFormattedString: function (string) {
    var regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" +
        "( ([0-9]{1,2}):([0-9]{2})? *(pm|am)" +
        "?)?)?)?";
    var d = string.match(new RegExp(regexp, "i"));
    if (d==null) return Date.parse(string); // at least give javascript a crack at it.
    var offset = 0;
    var date = new Date(d[1], 0, 1);
    if (d[3]) { date.setMonth(d[3] - 1); }
    if (d[5]) { date.setDate(d[5]); }
    if (d[7]) {
      hours = parseInt(d[7], 10);
      offset=0;
      if (d[9]) {
        is_pm = (d[9].toLowerCase()=="pm");
        if (is_pm && hours <= 11) hours+=12;
        if (!is_pm && hours == 12) hours=0;
      }
      date.setHours(hours);
    }
    if (d[8]) { date.setMinutes(d[8]); }
    if (d[10]) { date.setSeconds(d[10]); }
    if (d[12]) { date.setMilliseconds(Number("0." + d[12]) * 1000); }
    if (d[14]) {
      offset = (Number(d[16]) * 60) + Number(d[17]);
      offset *= ((d[15] == '-') ? 1 : -1);
    }

    return date;
  }
});
