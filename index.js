'use strict';

module.exports = function dotNotate(object, separator, target, prefix) {
    target = target || {};
    prefix = prefix || '';
    separator = separator || '.';

    Object.keys(object).forEach(key => {
        if (typeof object[key] === 'object' && object[key] !== null) {
            dotNotate(object[key], separator, target, prefix + key + separator);
        } else {
            return (target[prefix + key] = object[key]);
        }
    });

    return target;
};
