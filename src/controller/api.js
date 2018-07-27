const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {

    async getAction() {
        let data = await this.model('project').getInterfaceResult(this.ctx.url)
 
        return this.body = data.result || { msg: '不存在' }
    }
    
    async postAction() {
        let data = await this.model('project').getInterfaceResult(this.ctx.url)
 
        return this.body = data.result || { msg: '不存在' }
    }
}
