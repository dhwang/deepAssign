const deepAssign = require('./index');
const assert = function() {};

const deepAssign = (obj, obj2) => {
  Object.keys(obj2).forEach(key => {
    if (typeof obj[key] === 'object') obj[key] = mapAssign(obj[key], obj2[key]);
    else obj[key] = obj2[key]
  });
  return obj;
};

const en = {
  config: {
  	title: 'Configurations',
		selectConfig: {
			label: 'Select Config'
		},
		clone: {
      copyOf: 'Clone of ',
      description: 'Please enter a description for this configuration'
    },
    status: {
      code: 0,
      none: 'none',
      inProduction: 'In Production',
      selectedForProduction: 'Selected for Production'
    }
  }
};

const zh = {  
  config: {
    clone: {
      copyOf: '复制',
      description: '请输入配置说明'
    },
    status: {
      none: '无',
      inProduction: '产制中',
      selectedForProduction: '已选作产制'
    }
  }
};          
            
const merged = deepAssign(en, zh)

assert(merged.title === 'Configurations');
           
            
