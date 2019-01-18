// Closure
(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust (type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = (value, exp) => {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = (value, exp) => {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = (value, exp) => {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

export class SpaceAge {
  constructor (age = 0) {
    const EARTH_YEAR_OF_SEC = 31557600;

    this.RESOLVE_TIME = {
      Mercury: EARTH_YEAR_OF_SEC * 0.2408467,
      Venus:   EARTH_YEAR_OF_SEC * 0.61519726,
      Earth:   EARTH_YEAR_OF_SEC,
      Mars:    EARTH_YEAR_OF_SEC * 1.8808158,
      Jupiter: EARTH_YEAR_OF_SEC * 11.862615,
      Saturn:  EARTH_YEAR_OF_SEC * 29.447498,
      Uranus:  EARTH_YEAR_OF_SEC * 84.016846,
      Neptune: EARTH_YEAR_OF_SEC * 164.79132
    };

    this.seconds = age;

    return Object.keys(this.RESOLVE_TIME).reduce((newCustomerEvent, planet) => {
      newCustomerEvent[`on${planet}`] = () => this.makeConversionFor(planet);
      return newCustomerEvent;
    }, this);
  }

  makeConversionFor (planet) {
    return Math.round10(this.seconds / this.RESOLVE_TIME[planet], -2);
  }
}
