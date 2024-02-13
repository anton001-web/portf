const path = require("path");
const copyWebpack = require("copy-webpack-plugin");
const htmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const plugins = () => {
  const base = [
    new htmlPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new copyWebpack({
      patterns: [
        {
          from: path.resolve(__dirname, "public/images"),
          to: path.resolve(__dirname, "dist/assets/images"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: `styles/${filename("css")}`,
    }),
  ];

  return base;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js",
  },
  output: {
    publicPath: "/",
    clean: true,
    filename: `./js/${filename("js")}`,
    assetModuleFilename: "assets/images/[hash][ext]",
  },
  cache: {
    type: "filesystem",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
    ],
  },
  plugins: plugins(),
};
