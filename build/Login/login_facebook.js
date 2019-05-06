var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

async function loginFacebook(token) {
    var respond = null
    await axios.get(Connect.facebook + token)
            .then(async info => {
                const id = info.data.id
                await axios.get(Connect.zeliaLogin)
                    .then(info => {
                        const users = info.data
                        const user = users.find(c => c.fbID === id)
                        if (user) {
                            respond = {
                                status: 200,
                                'token': user.zelia_token
                            }
                        }
                        else {
                            respond = {
                                type: 200,
                                message: 'Could not find user'
                            }
                        }
                    })
            })
            .catch(err => {
                respond = {
                    status: 400,
                    message: 'Invalid Token'
                }
            })
    return respond
}

module.exports = loginFacebook