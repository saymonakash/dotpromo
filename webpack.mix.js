let mix = require('laravel-mix')

mix
  .setPublicPath('./')
  .js('assets/src/index.js', 'assets/dist/js')

  .sass('assets/src/app.scss', 'assets/dist/css')
  .options({
    postCss: [
      require('postcss-import'),
      require('tailwindcss/nesting'),
      require('tailwindcss'),
      require('autoprefixer'),
      
    ]
  }).version();


  // .postCss('src/tailwind.scss', 'public/dist/css', [
  //   require('postcss-import'),
  //   require('tailwindcss/nesting'), // this
  //   require('tailwindcss'),
  //   require('autoprefixer')
  // ])
  // .postCss('resources/css/app.css', 'public/css', [
  //   require('tailwindcss'),
  // ])