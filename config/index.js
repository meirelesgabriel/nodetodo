var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.uname + ':' + 
        configValues.pwd + 
        '@nodetodosample.esccl.mongodb.net/' + 
        configValues.dbname + 
        '?retryWrites=true&w=majority'
    }
}