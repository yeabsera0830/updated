var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

async function email(token) {
    return (
        await axios.get(Connect.zeliaLogin)
            .then(info => {
                const users = info.data
                const user = users.find(c => c.zelia_token === token)
                if (user) {
                    return {
                        type: 'success',
                        value: user.email
                    }
                } else {
                    return {
                        type: 'failure',
                        message: 'Invalid Token'
                    }
                }
            })
    )
}

module.exports = email

