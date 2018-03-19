var ev    = require('events').EventEmitter
var spawn = require('child_process').spawn

module.exports = function _beakerify (_website) {
if (! (this instanceof _beakerify)) return new _beakerify (_website);
if (!_website) throw Error('No website to scrape')
if (_website.startsWith('www.')) _website = _website.split('www.')[1]
var self = this
self.e = new ev ()
function _spawn (command, args, cb)  {
  var _options = {
    stdio: 'pipe'
  }
  var child = spawn(command, args, _options)
  child.stderr.on('data', function(data) {
    self.e.emit('data', data.toString())
  })
   child.stdout.on('data', function(data) {
    self.e.emit('data', data.toString())
    if(data.toString().indexOf('Created new dat in') > -1) {
	var _dat = data.toString().indexOf('dat://')
	var _datt = data.toString().substring(_dat, _dat+70)
	//console.log('HAZAAAR:: ', _datt, ' ', process.cwd());
	self.e.emit('end', { dat: _datt, path: process.cwd() })
	self.e.emit('complete', { dat: _datt, path: process.cwd() })
    }
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

return self.e
}






