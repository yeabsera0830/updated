var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

it('"Passing" Test for Login with Facebook', async () => {
    const token = 'isdunbciusv89h9w8evnw98evn9w8nv9w8vvv3'
    await axios.get(Connect.facebook + token)
        .then(async info => {
            const id = info.data.id
            await axios.get(Connect.zeliaLogin)
                .then(info => {
                    const users = info.data
                    const user = users.find(c => c.fbID === id)
                    expect(user).toBeDefined()
                })
                .catch(err => {
                    expect(err).toBeNull()
                })
        })
});

it('"Failing" Test for Login with Facebook', async () => {
    const token = 'isdunbciusv89h9w8evnw98evn9w8nv9w8vvv3'
    await axios.get(Connect.facebook + token)
        .then(async info => {
            const id = info.data.id
            await axios.get(Connect.zeliaLogin)
                .then(info => {
                    const users = info.data
                    const user = users.find(c => c.fbID === 2213234234234234)
                    expect(user).not.toBeDefined()
                })
                .catch(err => {
                    expect(err).toBeNull()
                })
        })
        .catch(err => {
            expect(err).toBeNull()
        })
});