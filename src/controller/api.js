const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
    async testAction(){
        // return this.success('test success')
        return {
            user: 'name',
            age: 11
        }
    }
};
