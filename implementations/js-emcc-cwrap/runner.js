function runner(size) {
    if (typeof server === 'undefined') {
        server =  { done: function () {} }
    }

    if (typeof performance === "undefined") {
        performance = Date;
    }

    var init_genrand = Module.cwrap('init_genrand', undefined, ['number'])
    var gen_rand = Module.cwrap('gen_rand', 'number', [])

    init_genrand(1337)
    var t1 = performance.now();
    for (var i = 0; i < size; ++i) {
        gen_rand(); 
    }
    var t2 = performance.now();
    var y = gen_rand();
    console.log(JSON.stringify({
        time: (t2-t1)/1000,
        output: y
    }));
    server.done();
}
