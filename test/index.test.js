const MoneyFormating = require(__dirname + '/../index');

var formating = new MoneyFormating();

test('should throw Error on invalid or without values', () => {
  expect(() => {
    formating.moneyToCents();
  }).toThrow('Value must be of type Number or String.');
});

test('should formating money value to cents', () => {
  expect(formating.moneyToCents(104.43)).toBe(10443);
});

test('should formating handle numerical values', () => {
  expect(formating.moneyToCents(1)).toBe(100);
});

test('should formating values as string decimal', () => {
  expect(formating.moneyToCents('2343.88')).toBe(234388);
});

test('should formating values with symbols as string', () => {
  expect(formating.moneyToCents('R$ 3,234.88')).toBe(323488);
});

test('should formating cents (String) values in money value', () => {
  expect(formating.centsToMoney('233488')).toBe(2334.88);
});

test('should formating cents (Number) values in money value', () => {
  expect(formating.centsToMoney('34562301')).toBe(345623.01);
});

test('should throw Error on invalid or without values', () => {
  expect(() => {
    formating.moneyToCurrency(342);
  }).toThrow('Cents must be a value of type String.');
});

test('should formating cents (String) into a formatted value (without currency) ', () => {
  expect(formating.moneyToCurrency('300')).toBe('3,00');
});

test('should formating cents (String) into a formatted brazilian real currency', () => {
  expect(formating.moneyToCurrency('395600', 'BRL')).toBe('R$ 3.956,00');
});

test('should formating cents (String) into a formatted brazilian dollar currency', () => {
  expect(formating.moneyToCurrency('34234349292', 'usd')).toBe(
    'US$ 342.343.492,92'
  );
});

test('should formating cents (String) into a formatted value if the currency is invalid or not passed', () => {
  expect(formating.moneyToCurrency('999 999 999', 'abc')).toBe('9.999.999,99');
});
