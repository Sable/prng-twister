function runner(size) {
    if (typeof performance === "undefined") {
        performance = Date;
    }

    var init_genrand = Module.cwrap('init_genrand', undefined, ['number'])
    var _run = Module.cwrap('run', 'number', ['number'])

    init_genrand(1337)
    var t1 = performance.now(); 
    var y = _run(size);
    var t2 = performance.now();
    console.log(JSON.stringify({
        time: (t2-t1)/1000,
        output: y
    }));
}
