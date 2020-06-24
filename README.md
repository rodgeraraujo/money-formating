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

#### Example bellow:

```js
var formating = require('money-formating');

var cents = formating.moneyToCents(345623.01);

console.log(cents); // 34562301

var money = formating.moneyToCents(cents);

console.log(money); // 345623.01
```

## License

[MIT](https://github.com/rodgeraraujo/money-formating/blob/master/LICENSE)

## Author

[Rogério Araújo](https://github.com/rodgeraraujo)
