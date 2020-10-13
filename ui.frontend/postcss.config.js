module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        require("postcss-each"),
        require("postcss-inline-svg"),
        require('postcss-extend'),
        require('postcss-nested'),
    ]
}