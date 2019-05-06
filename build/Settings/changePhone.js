var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

async function changePhone(token, new_phone) {
    return (
        await axios.get(Connect.zeliaLogin)
            .then(async info => {
                const users = info.data
                const user = users.find(c => c.zelia_token === token)
                if (user) {
                        user.phone = new_phone
                        return await axios.put(Connect.zeliaData, {
                            token: token,
                            user: user
                        })
                        .then(info => {
                            return {
                                'type': 'success',
                                'value': info.data.phone
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

module.exports = changePhone

