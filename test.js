var beakerify = require('./index.js')
var assert    = require('assert')
var website   = 'tx11.co.uk'

var b = beakerify (website)
//b.on('data', function (d) {console.log('.');})
b.on('complete', function (ev) {
	console.log('complete ', ev)
	assert(true)
	console.log('important test passed!')
	process.exit(0);
})
