const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
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
