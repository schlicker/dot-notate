# dot-notate

dot-notate converts an object into a one dimensional object with its attributes keys separated by . or another separator.

## Examples

### Default separator

```javascript
var dotNotate = require('dot-notate');

console.log(dotNotate({ this: { is: 'an example' } }));
```

The above code will result in the following object:

```json
{
    "this.is": "an example"
}
```

### Custom separator

```javascript
var dotNotate = require('dot-notate');

console.log(dotNotate({ this: { is: 'an example' } }, '|'));
```

The above code will result in the following object:

```json
{
    "this|is": "an example"
}
```

## Installation

```
npm install --save dot-notate
```

## Author

Johannes Schlicker

## License

This project is licensed under the MIT License.
