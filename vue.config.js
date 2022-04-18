const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/WASATEAM-TEST/" : "/",
  configureWebpack: {
    plugins: [require("unplugin-vue-components/webpack")({})],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/abstracts/_variables.scss";`,
      },
    },
  },
  transpileDependencies: true,
});
