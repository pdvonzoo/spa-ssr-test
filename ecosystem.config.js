module.exports = {
    apps: [{
        name: 'app',
        script: './app.js',
        instances: 0,
        exec_mode: 'cluster'
    }]
}


// "build": "webpack --config webpack.prod.js",
// "build:dev": "webpack --config webpack.dev.js",
// "start": "node dist/server.js",
// "test": "jest --watchAll --verbose"