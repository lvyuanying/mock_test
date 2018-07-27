module.exports = class extends think.Logic {
  indexAction() {

  }

  updateInterfaceAction(){
    this.allowMethods = 'post'
    let rules = {
      id: {
        int: true,
        required: true,
        default: 0
      },
      name: {
        string: true,
        required: true,
      },
      describe: {
        string: true,
        required: false,
      },
      project_id: {
        int: true,
        required: false,
        default: 0
      },
      url: {
        string: true,
        required: true
      },
      result: {
        object: true,
        required: true,
        // default: '{}'
      }
    }

    let msgs = {
      string: '{name} 必须为字符串',
      required: '{name} 不能为空',
      url: '{name} 不合法'
    }
    
    if(!this.validate(rules, msgs)){
      return this.fail('validate error', this.validateErrors);
    }
  }

  removeInterfaceAction(){
    this.allowMethods = 'post'
  }
};
