// eslint-disable-next-line
module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo"
    ],
    plugins: [
      // "transform-remove-console",
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.ts", ".android.ts", ".ts", ".ios.tsx", ".android.tsx", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@components": "./components",
            "@pages": "./pages",
            "@slices": "./redux/slices",
            "@layout": "./layout",
            "@src": "./src",
            "@assets": "./assets",
          }
        }
      ],
      "react-native-reanimated/plugin",
    ]
  };
};
