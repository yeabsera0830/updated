const port = require('../app')

module.exports = {
    facebook: "localhost:" + port.fbPort + "/facebook/",
    zeliaSignUp: "localhost:" + port.zeliaPort + "/zelia/signup",
    zeliaLogin: "localhost:" + port.zeliaPort + "/zelia/login",
    zeliaData: "localhost:" + port.zeliaPort +"/zelia/data"
}