require('./utils/swap')
require('./utils/randomize')
const Bubble = require('./algos/bubble')
const Selection = require('./algos/selection')
const Insertion = require('./algos/insertion')
module.exports = function() {
    return {
        Bubble,
        Selection,
        Insertion
    }
}
