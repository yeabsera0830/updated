var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

it('"Passing" Test for returning the Profile Picture', async () => {
    const token = 'sidubcsudbciasunciwunciwsuec'
    await axios.get(Connect.zeliaLogin)
            .then(info => {
                const users = info.data
                const user = users.find(c => c.zelia_token === token)
                expect(user.profile_picture).toBeDefined()
            })
});


it('"Failing" Test for returning the Profile Picture', async () => {
    const token = 'sidubcsudbciasunciwunciwsue'
    await axios.get(Connect.zeliaLogin)
            .then(info => {
                const users = info.data
                const user = users.find(c => c.zelia_token === token)
                expect(user).not.toBeDefined()
            })
});