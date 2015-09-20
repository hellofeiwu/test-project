module.exports = {
    module: {
        loaders: [
            {test: /\.jade$/, loader: "jade" },
            {test: /\.css$/, loader: "style!css" },
            {test: /\.(svg|woff|woff2|eot|dtd|png|gif|jpg|jpeg|ttf)(\?.*)?$/, loader: 'file'}
        ],
    },
    context: __dirname + "/src",
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
};
