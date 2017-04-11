# cut-hex

[![Build Status](https://travis-ci.org/sydev/cut-hex.svg?branch=master)](https://travis-ci.org/sydev/cut-hex)

Cut the leading '#' from a hex color code, if presented

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Changelog](#changelog)


## Installation

```
$ npm install --save cut-hex
```

Or if you prefer yarn:

```
$ yarn add cut-hex
```

## Usage

```JavaScript
const cut_hex = require('cut-hex');

// If no callback function is given, cut_hex returns a promise
cut_hex('#abc123')
  .then(hex => console.log(hex)) // 'abc123'
  .catch(err => console.error(err));

// Here with a given callback function
cut_hex('#abc123', (err, hex) => {
  if (err) console.error(err);

  console.log(hex); // 'abc123'
});

// Also works with no leading # presented
cut_hex('abc123', (err, hex) => {
  if (err) console.error(err);

  console.log(hex); // 'abc123'
});

```

## Development

```
$ npm test
```

## Changelog

- 1.0.0
  - Initial Release
