const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
    async testAction(){
        // return this.success('test success')
        this.body = {
            user: 'name',
            age: 11
        }
    }
};
