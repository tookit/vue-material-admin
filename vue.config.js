const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap: false,
  outputDir: 'dist',
  configureWebpack: {
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       app: {
    //         chunks: 'all',
    //         name: 'main',
    //         test: /[\\/]src[\\/](.*)[\\/]/,
    //       },          
    //       vendor: {
    //         test: /[\\/]node_modules[\\/][\\/]/,
    //         name: 'vendor',
    //         chunks: 'all',
    //       }
    //     }
    //   }
    // }    
  },

  chainWebpack: config => {
    // config.resolve.alias.set("@$", resolve("src")).set("@views", resolve("src/views"));
    config.resolve.alias.set("@$", resolve("src"))
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_API,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api/": "/api/",
        }
      }
    }
  },

  assetsDir: "static",
  runtimeCompiler: true
};
