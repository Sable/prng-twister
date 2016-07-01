var twister = require('ostrich-twister-prng');

function runner(size) {
    if (typeof performance === "undefined") {
        performance = Date;
    }

    twister.seed(1337)
    var t1 = performance.now();
    for (var i = 0; i < size; ++i) {
        twister.random()
    }
    var t2 = performance.now();
    var y = twister.random();
    console.log(JSON.stringify({
        time: (t2-t1)/1000,
        output: y
    }));
}
