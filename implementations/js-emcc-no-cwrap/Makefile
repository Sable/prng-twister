js:
	emcc -O2 ../../../../implementations/c/common.c ../c/mt19937ar.c -I../../../../implementations/c/ -s EXPORTED_FUNCTIONS="['_init_genrand', '_gen_rand', '_main', '_run']" --pre-js preamble.js --memory-init-file 0 -o mt.js
