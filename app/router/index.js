module.exports = function (app) {
    app.use('/', require('./routes/index/index.js'));
    app.use('/about', require('./routes/about/index.js'));
    app.use('/clients', require('./routes/clients/index.js'));
    app.use('/hire-us', require('./routes/hire-us/index.js'));
};
