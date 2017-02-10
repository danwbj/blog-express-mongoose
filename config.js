let devconfig = {
    port: 3000,
    db:'mongodb://127.0.0.1:27017/blog'
}

let prodconfig = {
    port: 3001
}

function returnConfig() {
    if (process.env.NODE_ENV == 'dev') {
        return devconfig
    } else {
        return prodconfig
    }
}
module.exports = returnConfig()
