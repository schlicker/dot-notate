'use strict';

module.exports = function dotNotate(object, target, prefix) {
    target = target || {};
    prefix = prefix || '';

    Object.keys(object).forEach(key => {
        if (typeof object[key] === 'object') {
            dotNotate(object[key], target, prefix + key + '.');
        } else {
            return (target[prefix + key] = object[key]);
        }
    });

    return target;
};
