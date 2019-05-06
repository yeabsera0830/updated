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
                                'status': 200,
                                'token': user.zelia_token
                            }
                        }
                        else {
                            return {
                                'status': 400,
                                'message': 'Password is incorrect'
                            }
                        }
                    } else {
                        return {
                            'status': 400,
                            'message': 'Could not find user'
                        }
                    }
                })
    )
}

module.exports = loginPhone