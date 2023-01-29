// @ts-check
const autoprefixer = require('autoprefixer');
const postcssJitProps = require('postcss-jit-props');
const postcssNesting = require('postcss-nesting');
const openProps = require('open-props');

const config = {
	plugins: [autoprefixer, postcssNesting, postcssJitProps(openProps)]
};

module.exports = config;
