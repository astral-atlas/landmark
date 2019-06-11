source-javascript := $(wildcard src/*.js)

dist: $(source-javascript)
	rm -rf dist
	node_modules/.bin/webpack --mode="production"