var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

async function loginFacebook(token) {
    var respond = null
    var token = 'oij98n98n98ncw98hcewc89nec8989w28bwiuecbweuc'
    await axios.get(Connect.facebook + token)
            .then(async info => {
                const id = info.data.id
                await axios.get(Connect.zeliaLogin)
                    .then(info => {
                        const users = info.data
                        const user = users.find(c => c.fbID === id)
                        if (user) {
                            respond = {
                                'type': 'success',
                                'value': user.zelia_token
                            }
                        }
                        else {
                            respond = {
                                type: 'failure',
                                message: 'Could not find user'
                            }
                        }
                    })
            })
            .catch(err => {
                respond = {
                    type: 'failure',
                    message: 'Invalid Token'
                }
            })
    return respond
}

module.exports = loginFacebook