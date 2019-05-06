var phone = require('./build/Sign-Up/signup_phone')
var fb = require('./build/Sign-Up/signup_facebook')

async function callback() {
    var test = await tester()
    console.log(test)
}

async function tester() {
    var response = await fb('oij98n98n98ncw98hcewc89nec8989w28bwiuecbweuc')
    return response
}

callback()