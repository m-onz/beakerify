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




/*

TODO... implementations for ALL THIS!!! ...... => => =>

// GORDONS ALIVE!!!

architecture

need to create cylindar webgl animation regl lib 
need 2D version as fallback.

indexing system.

how to host seed_bank? 

  host a replica_seedbank.
    will rehost the hypernet.
    instructions for raspberry pi. => massive external harddrive
    need to design master => slave seed_bank architecture.

--> there is the master hypernet_seedbank.
--> make it easy to host individual seeds.
--> can host the entire hypernet system with an external hardrive.

hypernet_seed_bank => seeds of all sites in the hypernet.
hypernet_dat_api => massive list of hypernet addresses
hypernet_assimilation_engine => assimilate new websites into the hypernet 
    receive proposed websites.
    do qualification via microservice -> if valid site 
      beakerify and add to the hypernet-index & hypernet_seed_bank


index existing hypernet_addresses
allow searching
do meta search to duckduckgo. 
do [add to hypernet] button from metasearch

1. HYPERNET 
HYPERDAT 
DATNET
DATHYPE
HYPENET


hyperdat.dat

  => <=

HYPERDAT. 

  => <=

hyperdat-index => dat json/list of all hyperdats 
hyperdat-seedbank => the seeds of the entire hyperdat 
hyperdat-website => search engine etc 

infrastructure

master-hyperdat-seedbank.
master-hyperdat-index 
master-hyperdat-website

master-hyperdat-seedbank 
  receives new hyperdat addresses ETC.

master-hyperdat index watches the master-hyperdat-seedbank.
  can monitor availability / number of seeds per hyperdat .

> hypernet-helper/ runner .

seed hyperdats -> individual or many.

anyone can help seed (just ordinary dats =>
  web worker seeder.
  easily host seeds from browser using Dat js ?
  
  hyperdat-storage

  hyperdat-sector 
    highly available storage. website hosting.
    private => encrypted.
    public => like creating your own highly available website.
      => with http mirroring. $$$ paid service.

  electron app ->
    host a section of the hyperdat  
    share encryped blobs as dats inside the hypernet.
    pay to host on highly avaiable sectors.
    monies goes to the most highly available nodes 
    the original sectors (owned by me :)  will have the highest availability! $$$$$

    hyperdat  -> 
    do dat:// => http . to get hyperdat.net address.
    allow http users to use the hyperdat via http 

    is it HYPERDAT  or HYPERNET ?
    cant decde yet... :
    block....ed

   get beaker running on raspberry pi.
   do small barebones system test across entire architecture
   commerical website for monitisation strategies.
   look into sketch app? for designing.
   need cool designs for website. => lead through to sales.
   how to do sales?? need payment methods?

)

reference the hypernet-index.dat
allow searching => initially just show the list.
search bar for => metasearch.
search bar for existing hypernet sites => 

[add to hypernet button]
show preview of non-hypernet sites somehow?
send website to dat assimilation engine.

hypernet.dat can update in realtime to show 

====================
turnips.com => dat://xxxx 


*/













