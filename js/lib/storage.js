/**
 * 
 * Object to localStorage Model 
 * 
 *  
 */
function load(name, def){
    if( !localStorage[name] )
    {
        update(name, def);
    }
    return JSON.parse(localStorage[name]);
}
function erase(name){
    delete localStorage[name];
}
export function update(name, newObj){
    localStorage[name] = JSON.stringify(newObj);
}

export function getModel(modelName, obj, parents = {keys: [], values: [obj]}){
    var fns = {};
    for( let key in obj )
    {
        let value = obj[key];
        let chain = {
            keys: [...parents.keys, key],
            values: [...parents.values, value]
        };
        if( value instanceof Object )
        {
            fns = Object.assign(fns, getModel(modelName, value, chain));
        }
        else
        {
            let name = chain.keys.map((key, index)=>{
                return key.split("").map((ch,i)=>{
                    return (i===0) ? ch.toUpperCase() : ch;
                }).join("");
            }).join("");
            let len = chain.keys.length;
            let keys = chain.keys;
            let values = chain.values;
            let root = values[0];
            let parent = values[len-1];
            let valueKey = keys[len-1];
            fns = Object.assign(fns, {
                [`get${name}`]: function(){
                    return parent[valueKey];
                },
                [`set${name}`]: function(value){
                    parent[valueKey] = value;
                    update(modelName, root);
                }
            });
        }
    }
    return fns;
}

export function objToModel(name, def, version, extension){
    var currentObj = load(name, def);
    if( currentObj.__version__ !== version )
    {
        erase(name);
        def = Object.assign({}, def, {
            __version__: version
        });
        currentObj = load(name, def);
    }
    var model = getModel(name, currentObj);
    var ext = extension(model);
    model = Object.assign(model, ext, {
        getObject(){
            let cloneObject = Object.assign({}, currentObj);
            delete cloneObject["__version__"];
            return cloneObject;
        }
    });
    return model;
}

export default objToModel;