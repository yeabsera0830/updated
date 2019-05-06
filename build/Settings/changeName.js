var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

async function changeName(token, new_name) {
    return (
        await axios.get(Connect.zeliaLogin)
            .then(async info => {
                const users = info.data
                const user = users.find(c => c.zelia_token === token)
                if (user) {
                        user.name = new_name
                        return await axios.put(Connect.zeliaData, {
                            token: token,
                            user: user
                        })
                        .then(info => {
                            return {
                                'type': 'success',
                                'value': info.data.name
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

module.exports = changeName

