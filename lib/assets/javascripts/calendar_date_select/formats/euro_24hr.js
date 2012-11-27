// Formats date and time as "01 January 2000 17:00"
DateFormatter.Euro24HR = Class.create(DateFormatter, {
  toFormattedString: function(include_time)
  {
    var str = this.zero_pad(this.date.getDate()) + " " + Date.months[this.date.getMonth()] + " " + this.date.getFullYear();
    if (include_time) { str += " " + this.date.getHours() + ":" + this.date.getPaddedMinutes() }
    return str;
  }
});
