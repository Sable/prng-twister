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
|js-emcc-cwrap    | none-js     | chrome      | 2.5270s  | +-1.30%  | 5          |
|js-emcc-cwrap    | none-js     | firefox     | 12.7232s | +-7.51%  | 5          |
|js-emcc-cwrap    | none-js     | safari      | 2.7666s  | +-6.44%  | 5          |
|js-emcc-no-cwrap | none-js     | chrome      | 2.3925s  | +-1.10%  | 5          |
|js-emcc-no-cwrap | none-js     | firefox     | 1.5182s  | +-5.53%  | 5          |
|js-emcc-no-cwrap | none-js     | safari      | 2.6040s  | +-6.92%  | 5          |
|c                | gcc         | native      | 1.1758s  | +-1.60%  | 5          |
|matlab           | none-matlab | matlab-vm   | 3.0097s  | +-56.10% | 5          |
