#!/usr/bin/env node

var a = require( "assert" ),
    parse = require( "./../lib/argsparser" ).parse,
    sys = require( "sys" );

sys.print( "Run argsparser tests...\n" );

// node script.js
a.deepEqual( parse(), {node: __filename} );

// node script.js -o
a.deepEqual( parse(["node", __filename, "-o"]), {node: __filename, "-o": true} );

// node script.js -o test
a.deepEqual( parse(["node", __filename, "-o", "test"]), {node: __filename, "-o": "test"} );

// node script.js -a testa -b testb
a.deepEqual( parse(["node", __filename, "-a", "testa", "-b", "testb"]), {node: __filename, "-a": "testa", "-b": "testb"} );

// node script.js --a testa --b testb 
a.deepEqual( parse(["node", __filename, "--a", "testa", "--b", "testb"]), {node: __filename, "--a": "testa", "--b": "testb"} );

// node script.js -a testa --b testb 
a.deepEqual( parse(["node", __filename, "-a", "testa", "--b", "testb"]), {node: __filename, "-a": "testa", "--b": "testb"} );

// node script.js --a testa -b testb 
a.deepEqual( parse(["node", __filename, "--a", "testa", "-b", "testb"]), {node: __filename, "--a": "testa", "-b": "testb"} );

// node script.js -paths /test.js /test1.js
a.deepEqual( parse(["node", __filename, "-paths", "/test.js", "/test1.js"]), {node: __filename, "-paths": ["/test.js", "/test1.js"]} );

// node script.js --paths /test.js /test1.js
a.deepEqual( parse(["node", __filename, "--paths", "/test.js", "/test1.js"]), {node: __filename, "--paths": ["/test.js", "/test1.js"]} );

// node script.js --paths /test.js /test1.js -a testa
a.deepEqual( parse(["node", __filename, "--paths", "/test.js", "/test1.js", "-a", "testa"]), {node: __filename, "--paths": ["/test.js", "/test1.js"], "-a": "testa"} );


sys.print( "All tests ok\n" );
