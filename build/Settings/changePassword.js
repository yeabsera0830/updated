var axios = require('axios')
var bcrypt = require('bcryptjs')
var Connect = require('../../__mocks__/Globals')

async function changePassword(token, new_password) {
    return (
        await axios.get(Connect.zeliaLogin)
            .then(async info => {
                const users = info.data
                const user = users.find(c => c.zelia_token === token)
                if (user) {
                        const salt = bcrypt.genSaltSync(10)
                        user.password = bcrypt.hashSync(new_password)
                        return await axios.put(Connect.zeliaData, {
                            token: token,
                            user: user
                        })
                        .then(info => {
                            return {
                                'type': 'success',
                                'value': new_password
                            }
                        })
                        .catch(err => err)
                } else {
                    return "Invalid Token"
                }
            })
            .catch(err => err)
    )
}

module.exports = changePassword

