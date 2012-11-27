Object.extend(Date, {
  one_day: 24 * 60 * 60 * 1000,
  weekdays: $w("S M T W T F S"),
  first_day_of_week: 0,
  months: $w("January February March April May June July August September October November December"),
});

Object.extend(Date.prototype, {
  getPaddedMinutes: function () {
    return this.getMinutes().toString().zero_pad();
  },

  getAMPMHour: function () {
    var hour = this.getHours();
    return (hour == 0) ? 12 : (hour > 12 ? hour - 12 : hour )
  },

  getAMPM: function () {
    return (this.getHours() < 12) ? "AM" : "PM";
  },

  getHourForDropdown: function () {
    return this.getAMPMHour() + " " + this.getAMPM();
  },

  stripTime: function () {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate());
  },

  daysDistance: function (compare_date) {
    return Math.round((compare_date - this) / Date.one_day);
  }
});

