var axios = require('axios')
var bcrypt = require('bcryptjs')
var Connect = require('../../__mocks__/Globals')

async function loginPhone(phone, password) {
    return (
        await axios.get(Connect.zeliaLogin)
                .then(info => {
                    const users = info.data
                    const user = users.find(c => c.phone === phone)
                    if (user) {
                        if (bcrypt.compareSync(password, user.password)) {
                            return {
                                type: 'success',
                                zelia_token: user.zelia_token
                            }
                        }
                        else {
                            return {
                                type: 'failure',
                                message: 'Password is incorrect'
                            }
                        }
                    } else {
                        return {
                            type: 'failure',
                            message: 'Counld not find user'
                        }
                    }
                })
    )
}

module.exports = loginPhone