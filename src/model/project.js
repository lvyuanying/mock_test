module.exports = class extends think.Model {
    async getProjectList(){
        let project_list = await this.select()
        return project_list
    }

    async getProjectInterfaceList(project_id){
        let interface_list = await this.model('interface').where({ project_id: project_id }).select()
        return interface_list
    }

    async getInterfaceResult(url = ''){
        let result = await this.model('interface').where({ url: url }).find() 
        return result
    }

    async addInterface({ name = '', describe = '', project_id = 0, url = '', result = '{}' }){
        let insertId = await this.model('interface').add({
            name, describe, project_id, url, result: JSON.stringify(result)
        })
        
        return 'insertId'
    }

    async removeInterface(interface_id){
        let res = await this.model('interface').where({
            id: interface_id
        }).delete()

        return res
    }
};
