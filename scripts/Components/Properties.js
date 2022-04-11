MyGame.components.Properties = function (spec) {
    const valueTypes = {
        YOU: 1,
        PUSH: 2
    }
    function is(type){
        for(let i = 0; i < spec.keys.length; i++){
            let key = spec.keys[i];
            if(valueTypes[key]){
                return true;
            }
            else{
                return false;
            }
        }
    }
    // console.log(spec.keys)
    function toString() {
        let mString = "this is "
        for (let i = 0; i < spec.keys.length; i++) {
            // console.log(spec.keys[i]);
            let key = spec.keys[i];
            if (valueTypes[key]) {
                mString += key;
                mString += " and "

            }
            // for (let key in spec.keys[i]) {
            //     console.log(key);
            //     // console.log(valueTypes[key])
            //     //     if (key && valueTypes[key]){
            //     //         // console.log(`this is ${key}`)
            //     // }
            // }
            return mString;
        }
    }
    return {
        get name() { return 'properties' },
        is: is,
        get valueTypes() { return valueTypes },
        get keys() { return spec.keys; },
        toString: toString,
        // get valueType
    }
}