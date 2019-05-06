var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

function rand() {
    return Math.random().toString(36).substr(2)
}

it('"Passing" Test for Sign Up with Facebook', async () => {
    const token = 'isdunbciusv89h9w8evnw98evn9w8nv9w8vvv3'
    await axios.get(Connect.facebook + token)
        .then(async info => {
            const user = {
                fbID: info.data.id,
                name: info.data.name,
                email: info.data.email,
                profile_pic: info.data.profile_pic,
                zelia_token: rand() + rand(),
                password: null,
                reviews: [],
                friends: []
            }
            await axios.post(Connect.zeliaSignUp, user)
            .then(info => {
                expect(info.data).toEqual(user)
            })
            .catch(err => {
                expect(err).toBeNull()
            })
        })
});

it('"Failing" Test for Sign Up with Facebook', async () => {
    const token = 'isdunbciusv89h9w8evnw98evn9w8nv9w8vvv3'
    await axios.get(Connect.facebook + token)
        .then(async info => {
            const user = {
                fbID: info.data.id,
                name: info.data.name,
                email: info.data.email,
                profile_pic: info.data.profile_pic,
                zelia_token: rand() + rand(),
                password: null,
                reviews: [],
                friends: []
            }
            await axios.post(Connect.zeliaSignUp, {
                fbID: 'non sense',
                name: info.data.name,
                email: info.data.email,
                profile_pic: info.data.profile_pic,
                zelia_token: rand() + rand(),
                password: null,
                reviews: [],
                friends: []
            })
            .then(info => {
                expect(info.data).not.toEqual(user)
            })
            .catch(err => {
                expect(err).toBeNull()
            })
        })
});