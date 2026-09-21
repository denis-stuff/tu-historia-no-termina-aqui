const path                 = require('path');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin');
const TerserPlugin         = require('terser-webpack-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode !== 'production';

  return {

  // ─────────────────────────────────────────
  // Modo
  // ─────────────────────────────────────────
  mode: isDev ? 'development' : 'production',

  // ─────────────────────────────────────────
  // Entry
  // ─────────────────────────────────────────
  entry: './src/js/index.js',

  // ─────────────────────────────────────────
  // Output
  // ─────────────────────────────────────────
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash:8].js',
    assetModuleFilename: 'assets/[name].[contenthash:8][ext]',
    clean: true,
  },

  // ─────────────────────────────────────────
  // DevServer
  // ─────────────────────────────────────────
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  // ─────────────────────────────────────────
  // Source Maps
  // ─────────────────────────────────────────
  devtool: isDev ? 'eval-source-map' : 'source-map',

  // ─────────────────────────────────────────
  // Módulos / Loaders
  // ─────────────────────────────────────────
  module: {
    rules: [

      {
        test: /\.html$/,
        use: ['html-loader']
      },

      // JavaScript — Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        },
      },

      // SASS / CSS
      {
        test: /\.(scss|sass|css)$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
              sourceMap: isDev,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },

      // Imágenes
      {
        test: /\.(png|jpe?g|gif|webp|avif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[contenthash:8][ext]',
        },
      },

      // Fuentes
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[contenthash:8][ext]',
        },
      },

    ],
  },

  // ─────────────────────────────────────────
  // Plugins
  // ─────────────────────────────────────────
  plugins: [

    // Limpia /dist antes de cada build
    new CleanWebpackPlugin(),

    // Genera el HTML final inyectando los bundles
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: !isDev && {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),

    // Extrae CSS a archivo separado en producción
    ...(!isDev
      ? [
          new MiniCssExtractPlugin({
            filename: 'css/styles.[contenthash:8].css',
          }),
        ]
      : []),

    // Copia archivos estáticos que no pasan por Webpack
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/static'),
          to:   path.resolve(__dirname, 'dist/assets/static'),
          noErrorOnMissing: true,
        },
      ],
    }),

  ],

  // ─────────────────────────────────────────
  // Optimización (solo producción)
  // ─────────────────────────────────────────
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { drop_console: true },
          format:   { comments: false },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },

  // ─────────────────────────────────────────
  // Resolución de módulos
  // ─────────────────────────────────────────
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      '@':       path.resolve(__dirname, 'src'),
      '@js':     path.resolve(__dirname, 'src/js'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },

  }; // fin return
}; // fin module.exports