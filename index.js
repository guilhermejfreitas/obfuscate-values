function obfuscateValue(config, key, value){

    if (config.obfuscate_attrs.includes(key)){
               
        if (config.rules[key]){

            if (config.rules[key].everything_before){

                if (!config.rules[key].change_to){
                    config.rules[key].change_to = '***';
                }

                const regex = new RegExp(`.*(?=${config.rules[key].everything_before})`);
         
                value = value.replace(regex, config.rules[key].change_to);
            }

            if (config.rules[key].everything_after){

                if (!config.rules[key].change_to){
                    config.rules[key].change_to = '***';
                }

                const regex = new RegExp(`(?<=${config.rules[key].everything_after}).*$`);
         
                value = value.replace(regex, config.rules[key].change_to);
            }

            return value
        }

        value = '***';
    }

    return value;
}

class ObfuscateValues {

    config = {};

    constructor(config){

        if (config.obfuscate_attrs != null && !Array.isArray(config.obfuscate_attrs)){
            throw Error('invalid input. (obfuscate_attrs)')
        }

        this.config.obfuscate_attrs = config.obfuscate_attrs;
        this.config.rules = config.rules;
    }

    obfuscate(obj) {

        const newObj = {};
      
        for (let key in obj) {
    
            const value = obj[key];

            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                
                newObj[key] = this.transformObject(value);

            } else if (Array.isArray(value)) {

                newObj[key] = value.map(item => (typeof item === 'object' ? this.transformObject(value) : obfuscateValue(this.config, key, value)));

                newObj[key] = value.map((item)=>{
                    if (typeof item === 'object'){
                        return this.transformObject(item)
                    }else{
                        return obfuscateValue(this.config, key, item)
                    }
                });

            } else {
                newObj[key] = obfuscateValue(this.config, key, value);
            }
        }
    
        return newObj;
      }
    
}

module.exports = ObfuscateValues;