module.export = function() {

  const deepAssign = (obj, obj2) => {
  Object.keys(obj2).forEach(key => {
    if (typeof obj[key] === 'object') obj[key] = deepAssign(obj[key], obj2[key]);
    else obj[key] = obj2[key]
  });
  return obj;
};
}

           
            
