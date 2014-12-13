![http utilities logotype](logo.png)

Basic HTTP Utils for Node.js

### Installation

`npm install http-utilities`

### Initialization
``` js
  var httpUtils = require('http-utilities');
```

### API

#### statCode (code descriptor)
``` js
  httpUtils.statCode('ok'); // returns '200'
  httpUtils.statCode('not_found'); // returns '404'
  httpUtils.statCode('accepted'); // returns '202'
```

#### statName (code number)
``` js
  httpUtils.statName(200); // returns 'ok'
  httpUtils.statName(500); // returns 'internal_server_error'
```

#### Dr.Mime functions!
[Dr.Mime](http://github.com/SametSisartenep/dr-mime) is embedded into this module, so you can use every function without switching! :D

### LICENSE
The MIT License (MIT)

Copyright (c) 2014 Rodrigo González López

### Contributing
This project is (and will always be) open sourced, feel free to hack on it! ;)
