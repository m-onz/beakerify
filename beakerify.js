#!/usr/bin/env node
var _website  = process.argv[2]
if (!_website) return console.log('beakerify abc.com')
var beakerify = require('./index.js')
var b         = beakerify (_website)
b.on('data', function (d) {console.log(d);})
b.on('complete', function (ev) {
        console.log('beakerify-ification::complete::', ev)
})














