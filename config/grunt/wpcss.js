// https://github.com/cedaro/grunt-wp-css
module.exports = {
	options: {
		config: 'alphabetical'
	},
	css: {
		expand: true,
		src: [ '<%= paths.tmp %>style.css' ]
	}
};
