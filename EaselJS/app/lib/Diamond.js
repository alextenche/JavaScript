'use strict';

var createSubClass = require('./utils/create_subclass'),
	Tile = require('./Tile');

module.exports = createSubClass(Tile, 'Diamond', {
	initialize: Diamond$initialize
});

function Diamond$initialize(x, y){
	Tile.prototype.initialize.apply(this, arguments);
	this.name = 'diamond';
	this.graphics.beginFill('blue').drawCircle(0, 0, 50, 50);
}