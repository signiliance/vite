const babel = require('rollup-plugin-babel')

module.exports = {
  rollupInputOptions: {
    plugins: [
      babel({
        extensions: [".js", ".ts"],
        exclude: "node_modules/**",
        runtimeHelpers: true
      })
    ]
  },
  enableEsbuild: false
}