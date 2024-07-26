const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.js",
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    {
      apply: (compiler) => {
        const pluginName = "test-plugin";
        const { webpack } = compiler;
        const { Compilation } = webpack;
        const { RawSource } = webpack.sources;

        compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
          compilation.hooks.processAssets.tap(
            {
              name: pluginName,
              stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
            },
            (assets) => {
              const content = assets["index.html"]._value.replace(
                "Welcome",
                "Hello World",
              );
              assets["index.html"]["_value"] = content;
              assets["index.html"]["_valueAsString"] = content;
              compilation.emitAsset("index.html", new RawSource(content));
            },
          );
        });
      },
    },
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
