# beakerify
beakerify a website

```sh
git clone https://github.com/m-onz/beakerify
cd beakerify
npm install
node ./beakerify www.tx11.co.uk
// or use globally..
sudo npm link
cd ~
beakerify tx11.co.uk
```

The website will be cloned and shared via dat. Copy the url into the
[Beaker Browser](https://www.github.com/beakerbrowser/beaker) to view it.

### Library usage

```
var beakerify = require('beakerify')

var b = beakerify ('tx11.co.uk')

b.on('data', function(d){console.log(d);})
b.on('complete', function (meta) {
	console.log(meta); // { dat: 'dat://xxx', path: '/path/to/website' }
})

```

### Dependencies.

This uses wget and dat installed globally (npm install dat -g). Tested on a Raspberry Pi (Debian Linux).



