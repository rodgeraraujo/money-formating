var { currencies } = require('./currency');

function MoneyFormating(currency) {
  this.currency = currency;
}

/**
 * Convert money value into Money cents value.
 *
 * @since 0.1.0
 * @param  {String|Number} amount Money value
 * @returns {Number} Returns the cents (Numerical) value.
 * @public
 */
MoneyFormating.prototype.moneyToCents = function moneyToCents(amount) {
  if (typeof amount !== 'number' && typeof amount !== 'string') {
    throw new Error('Value must be of type Number or String.');
  }

  if (typeof amount === 'number') return Math.round(amount * 100);

  var amountValue = parseFloat(replaceSymbols(amount));
  return Math.round(amountValue);
};

/**
 * Convert cents value into money value.
 *
 * @since 0.1.0
 * @param  {String|Number} amount Cents value
 * @returns {Number} Returns the money value.
 * @public
 */
MoneyFormating.prototype.centsToMoney = function centsToMoney(cents) {
  if (isNaN(cents) || cents == null) {
    throw new Error(
      'Cents must be a value type Number or String without periods or commas.'
    );
  }
  return Number(cents) / 100;
};

/**
 * Convert cents value into currency formated value.
 *
 * @since 0.1.1
 * @param  {String} amount Money value
 * @returns {String} Returns the money formatted.
 * @public
 */
MoneyFormating.prototype.moneyToCurrency = function moneyToCurrency(
  cents,
  currency = ''
) {
  if (typeof cents == 'number' || cents == null || cents == undefined) {
    throw new Error('Cents must be a value of type String.');
  }

  var value = '',
    regex = /(\d)(?=(\d\d\d)+(?!\d))/g,
    precision = 2,
    thousands = '.',
    decimal = ',',
    currency =
      typeof currencies[currency.toUpperCase()] === 'undefined'
        ? ''
        : currencies[currency.toUpperCase()].symbol + ' ';

  cents = replaceSymbols(cents);
  cents = (cents / 100.0).toFixed(precision);

  var parts = cents.split('.'),
    money = parts[0].replace(regex, '$1' + thousands),
    cents = parts[1] ? decimal + parts[1] : '';

  value = currency + money + cents;
  return value;
};

/**
 * Replace symbols (`$,R.`) from amount string.
 *
 * @param {String} amount Money value
 * @private
 */
function replaceSymbols(amount) {
  return amount.toString().replace(/[$,R. ]/g, '');
}

/**
 * Returns a default value provide, if option is undefiend.
 *
 * @since 0.1.1
 * @param {*} opt The provide option value
 * @param {*} def The provide default value
 * @returns {*} The default value or option if not undefiend
 *
 */
function defaultOption(opt, def) {
  return typeof opt == 'undefined' ? def : opt;
}

module.exports = MoneyFormating;
