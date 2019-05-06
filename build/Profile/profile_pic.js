var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

async function profilePicture(token) {
    return (
        await axios.get(Connect.zeliaLogin)
            .then(info => {
                const users = info.data
                const user = users.find(c => c.zelia_token === token)
                if (user) {
                    console.log(user.profile_pic)
                    return {
                        type: 'success',
                        value: user.profile_picture
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

module.exports = profilePicture

