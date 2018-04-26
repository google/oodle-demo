const critical = require('critical');

critical.generate({
    inline: true,
    base: 'dist/',
    css: ['dist/static/critical.css'],
    src: 'index.html',
    dest: 'index.html',
    minify: true,
    width: 1300,
    height: 900
});