const cssnano = require('cssnano');

/**
 * postcss plugins
 */
function postcss() {
  return [
    cssnano({
      autoprefixer : {
        add      : true,
        remove   : true,
        browsers : ['last 2 versions']
      },
      discardComments : {
        removeAll : true
      },
      discardUnused : false,
      mergeIdents   : false,
      reduceIdents  : false,
      safe          : true,
      sourcemap     : true
    }),
  ];
}

module.exports = postcss;
