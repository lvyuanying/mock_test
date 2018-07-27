const Base = require('./base.js');

module.exports = class extends Base {
    async updateInterfaceAction (){
        let body = this.post()

        let result = await this.model('project').addInterface(body)

        return this.success('更新成功')
    }

    async removeInterfaceAction () {
        let id = this.post('id')
        let result
        try{
            result = await this.model('project').removeInterface(id)
        }catch(e){
            return this.success(e)
        }

        return this.success(result)
    }
};
