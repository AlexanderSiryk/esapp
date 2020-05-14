const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
//require('laravel-mix-react-css-modules');

mix.react('frontend/src/index.js', 'public/js');//.reactCSSModules();
//mix.styles(['frontend/build/static/css/main.00273e99.chunk.css'], 'public/css/index.css');
// mix.react('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');
