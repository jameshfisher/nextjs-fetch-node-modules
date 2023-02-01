const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/pyodide/pyodide.asm.data',
            to: 'static/pyodide-data/',
          },
          {
            from: 'node_modules/pyodide/repodata.json',
            to: 'static/pyodide-data/',
          },
          {
            from: 'node_modules/pyodide/pyodide.asm.wasm',
            to: 'static/pyodide-data/',
          },
          {
            from: 'node_modules/pyodide/pyodide_py.tar',
            to: 'static/pyodide-data/',
          },
          {
            from: 'node_modules/pyodide/pyodide.asm.js',
            to: 'static/pyodide-data/',
          },
        ],
      }),
    );
    return config;
  },
  reactStrictMode: true,
}

module.exports = nextConfig
