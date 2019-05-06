const port = require('../main')


module.exports = {
    facebook: "https://agile-taiga-13487.herokuapp.com" + port.mainPort + "/facebook/",
    zeliaSignUp: "https://agile-taiga-13487.herokuapp.com" + port.mainPort + "/zelia/signup",
    zeliaLogin: "https://agile-taiga-13487.herokuapp.com" + port.mainPort + "/zelia/login",
    zeliaData: "https://agile-taiga-13487.herokuapp.com" + port.mainPort + "/zelia/data"
}
/*
module.exports = {
    facebook: "http://localhost:8081/facebook/",
    zeliaSignUp: "http://localhost:8081/zelia/signup/",
    zeliaLogin: "http://localhost:8081/zelia/login/",
    zeliaData: "http://localhost:8081/zelia/data/"
}
*/