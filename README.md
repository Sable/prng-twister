# prng-twister

Benchmark to compare the speed for generating doubles with the Mersenne Twister Pseudo-random Number Generator between MATLAB, C, and JS (with Emscripten)

### Invariants (configuration parameters that are the same for all runs) ###

| category | short-name |
| -------- | ---------- |
|    benchmark | prng-twister |
|    platform | mba-2011 |
|    input-size | large |

### Results ###

|implementation   | compiler    | environment | mean     | std      | repetitions|
|---------------- | ----------- | ----------- | -------- | -------- | -----------|
|matlab           | none-matlab | matlab-vm   | 4.7279s  | +-10.20% | 5          |
|js               | browserify  | chrome      | 9.7367s  | +-11.86% | 5          |
|js               | browserify  | firefox     | 12.0646s | +-5.80%  | 5          |
|js               | browserify  | safari      | 5.4384s  | +-23.36% | 5          |
|c                | gcc         | native      | 1.2894s  | +-1.37%  | 5          |
|js-emcc-cwrap    | browserify  | chrome      | 3.3276s  | +-6.87%  | 5          |
|js-emcc-cwrap    | browserify  | firefox     | 15.1825s | +-4.49%  | 5          |
|js-emcc-cwrap    | browserify  | safari      | 3.2950s  | +-3.63%  | 5          |
|js-emcc-no-cwrap | browserify  | chrome      | 3.1465s  | +-10.33% | 5          |
|js-emcc-no-cwrap | browserify  | firefox     | 2.0518s  | +-12.86% | 5          |
|js-emcc-no-cwrap | browserify  | safari      | 3.1813s  | +-13.12% | 5          |
