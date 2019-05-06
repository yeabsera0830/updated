const port = require('../app')

module.exports = {
    facebook: "https://agile-taiga-13487.herokuapp.com:" + port.fbPort + "/facebook/",
    zeliaSignUp: "https://agile-taiga-13487.herokuapp.com:" + port.zeliaPort + "/zelia/signup",
    zeliaLogin: "https://agile-taiga-13487.herokuapp.com:" + port.zeliaPort + "/zelia/login",
    zeliaData: "https://agile-taiga-13487.herokuapp.com:" + port.zeliaPort +"/zelia/data"
}