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
