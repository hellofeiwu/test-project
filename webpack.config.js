module.exports = {
    module: {
        loaders: [
            {test: /\.jade$/, loader: "jade" },
            {test: /\.css$/, loader: "style!css" },
        ],
    },
    context: __dirname + "/src",
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
};
