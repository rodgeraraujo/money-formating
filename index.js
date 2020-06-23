function MoneyFormating(currency) {
  this.currency = currency;
}

/**
 * Convert money value into Money cents value.
 *
 * @param  {String|Number} amount Money value
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
 * @param  {String|Number} amount Cents value
 * @public
 */
MoneyFormating.prototype.centsToMoney = function centsToMoney(cents) {
  if (isNaN(cents) || cents == null) {
    throw new Error('Cents must be a value type Number or String without periods or commas.');
  }
  return Number(cents) / 100;
};

/**
 * Replace symbols (`$,R.`) from amount string.
 *
 * @param {String} amount Money value
 * @private
 */
function replaceSymbols(amount) {
  return amount.replace(/[$,R.]/g, '');
}
module.exports = MoneyFormating;
