export default ({ $axios, redirect }) => {
    $axios.onRequest(config => {
       
        config.url = `${config.url}`
        for (let key in config.data) {
            if (config.data&&!config.data._NOCLEAR) {
                if (config.data[key] === '' || config.data[key] === undefined || config.data[key] === null) {
                    if (config.data._EMPTYITEM && config.data._EMPTYITEM.indexOf(key) != -1) {

                    } else {
                        delete config.data[key]
                    }
                }
                
            }
        }
        if (config.data && config.data._DELETEITEM) {
            config.data._DELETEITEM.forEach(item => {
                delete config.data[item]
            });
            delete config.data._DELETEITEM;
        }
        if (config.data && config.data._EMPTYITEM) delete config.data._EMPTYITEM;
        if (config.data && config.data._NOCLEAR) delete config.data._NOCLEAR;
        
        config.data = qs.stringify(config.data)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    })
}