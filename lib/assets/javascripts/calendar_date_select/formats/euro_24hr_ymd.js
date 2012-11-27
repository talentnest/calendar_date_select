// Formats date and time as "2000.01.20 17:00"
DateFormatter.Euro24HRYMD = Class.create(DateFormatter, {
  toFormattedString: function(include_time)
  {
    var str = this.date.getFullYear() + "." + this.zero_pad(this.date.getMonth()+1) + "." + this.zero_pad(this.date.getDate());
    if (include_time) { str += " " + this.date.getHours() + ":" + this.date.getPaddedMinutes() }
    return str;
  }
});