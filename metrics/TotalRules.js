/*! Parker v0.1.0 - MIT license */

'use strict';

module.exports = {
    id: 'total-rules',
    name: 'Total Rules',
    type: 'rule',
    aggregate: 'sum',
    format: 'number',
    measure: function (rule) {
        return 1;
    }
};
