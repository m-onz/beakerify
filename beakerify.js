#!/usr/bin/env node

var spawn = require('child_process').spawn
var _website = process.argv[2]
if (!_website) return console.log('beakerify abc.com')
if (_website.startsWith('www.')) _website = _website.split('www.')[1]
function _spawn (command, args, cb)  {
  var _options = {
    stdio: 'pipe'
  }
  var child = spawn(command, args, _options)
  child.stderr.on('data', function(data) {
    console.log(data.toString());
  })
   child.stdout.on('data', function(data) {
    console.log(data.toString());
  }) 
  child.on('exit', function () {
    cb(true)
    console.log('turnips')
  })
}


function spawn_wget(website, cb) {
  var _args = [
  '--recursive',
  '--no-clobber',
  '--page-requisites',
  '--html-extension',
  '--convert-links',
  '--restrict-file-names=windows',
  '--domains',
  website,
  '--no-parent',
  'www.'+website
  ]
  _spawn('wget', _args, cb)
}

function spawn_share (cb) {
  _spawn('dat', [ 'share' ], cb)
}

spawn_wget(_website,  function () {
    console.log(`Starting directory: ${process.cwd()}`);
    try {
      process.chdir('./www.'+_website);
      console.log(`New directory: ${process.cwd()}`);
      spawn_share(function () {
          console.log('TURNIPS')
      })
    } catch (err) {
      console.error(`chdir: ${err}`);
    }
})














