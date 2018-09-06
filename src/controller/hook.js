const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {

    async getAction() {
        
    }
    
    async postAction() {
        return this.success(this.body, '请求成功')
    }
}
