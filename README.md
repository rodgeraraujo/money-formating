# MoneyFormating

[![npm version](https://badge.fury.io/js/money-formating.svg)](https://badge.fury.io/js/money-formating) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### Convert and format money value (number, string, formatted and non-formatted).

## Installation

npm or yarn:

```sh
$ npm i money-formating

```

## Description

A little package to format money values.

### Examples:

#### Imports module:

```js
var formating = require('money-formating');
```

#### Cents and Money formatter:

```js
//format money to cents value
var cents = formating.moneyToCents(345623.01);

console.log(cents); // 34562301

//format cents to money value
var money = formating.moneyToCents(cents);

console.log(money); // 345623.01
```

#### Cents/Money formatter to currency:

```js
var currency = formating.moneyToCents('345623.01');

console.log(currency); // 345.623,01

var currency2 = formating.moneyToCents('456733402', 'BRL');

console.log(currency2); // R$ 4.567.334,02 <- brazilian real
```

> This is not a currency converter, just a `formatter`.

## Currency Data

This lib uses the currency map from [localeplanet](http://www.localeplanet.com/api/auto/currencymap.html) API.

## License

[MIT](https://github.com/rodgeraraujo/money-formating/blob/master/LICENSE)

## Author

[Rogério Araújo](https://github.com/rodgeraraujo)
