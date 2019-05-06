var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

function rand() {
    return Math.random().toString(36).substr(2)
}

async function checkUser(token) {
    return (
        await axios.get(Connect.facebook + token)
        .then(async info => {
            id = info.data.id
            return (
                await axios.get(Connect.zeliaLogin)
                .then(response => {
                    const Users = response.data
                    const user = Users.find(c => c.fbID === id)
                    if (user)
                        return true
                    else
                        return false
                })
            )
        })
    )
}

async function signupFacebook(token) {
    const flag = await checkUser(token)
    if (flag) {
        return {
            'type': 'failure',
            'message': 'User already exists'
        }
    }
    var respond = null
    await axios.get(Connect.facebook + token)
                    .then(async info => {
                        const user = {
                                fbID: info.data.id,
                                name: info.data.name,
                                email: info.data.email,
                                phone: null,
                                profile_picture: info.data.profile_pic,
                                zelia_token: rand() + rand(),
                                password: null,
                                reviews: [],
                                friends: []
                        }
                        await axios.post(Connect.zeliaSignUp, { user: user })
                        .then(response =>  {
                            respond = {
                                'type': 'success',
                                'value': response.data.zelia_token
                            }
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        respond =  {
                            'type': 'failure',
                            'message': 'Invalid token'
                        }
                    })
    return respond
}

module.exports = signupFacebook
