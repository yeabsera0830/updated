var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

async function changeProfilePicture(token, new_profile_picture) {
    return (
        await axios.get(Connect.zeliaLogin)
            .then(async info => {
                const users = info.data
                const user = users.find(c => c.zelia_token === token)
                if (user) {
                        user.profile_picture = new_profile_picture
                        return await axios.put(Connect.zeliaData, {
                            token: token,
                            user: user
                        })
                        .then(info => {
                            return {
                                'type': 'success',
                                'value': info.data.profile_picture
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

module.exports = changeProfilePicture