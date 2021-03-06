// American Format: 12/31/2000 5:00 pm
// Thanks, Wes Hays
DateFormatter.American = Class.create(DateFormatter, {
  toFormattedString: function(include_time) {
    var str = this.zero_pad(this.date.getMonth() + 1) + '/' + this.zero_pad(this.date.getDate()) + '/' + this.date.getFullYear();

    if (include_time) { hour = this.date.getHours(); str += " " + this.date.getAMPMHour() + ":" + this.date.getPaddedMinutes() + " " + this.date.getAMPM() }
    return str;
  },

  parseFormattedString: function (string) {
    // Test these with and without the time
    // 11/11/1111 12pm
    // 11/11/1111 1pm
    // 1/11/1111 10:10pm
    // 11/1/1111 01pm
    // 1/1/1111 01:11pm
    // 1/1/1111 1:11pm
    var regexp = "(([0-1]?[0-9])\/[0-3]?[0-9]\/[0-9]{4}) *([0-9]{1,2}(:[0-9]{2})? *(am|pm))?";
    string = string.strip();
    var d = string.match(new RegExp(regexp, "i"));
    if (d==null) {
      return Date.parse(string); // Give javascript a chance to parse it.
    }

    var mdy = d[1].split('/'), hrs = 0, mts = 0;
    if(d[3] != null && d[3].strip() != "") {
      hrs = parseInt(d[3].split('')[0], 10);
      if(d[5].toLowerCase() == 'pm') { hrs += 12; } // Add 12 more to hrs
      mts = d[4].split(':')[1];
    }

    return new Date(mdy[2], parseInt(mdy[0], 10)-1, mdy[1], hrs, mts, 0);
  }
})