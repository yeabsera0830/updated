var axios = require('axios')
var Connect = require('../../__mocks__/Globals')

it('"Passing" Test for changing Name', async () => {
    const new_name = "Name Changed"
    const token = "bvvhb60sd0giubi98h98b9o8bi98bu"
    await axios.get(Connect.zeliaLogin)
        .then(async info => {
            const users = info.data
            const user = users.find(c => c.zelia_token === token)
            if (user) {
                user.name = new_name
                await axios.put(Connect.zeliaData, {
                    token: token,
                    user: user
                })
                .then(info => {
                    expect(info.data.name).toEqual(new_name)
                })
                .catch(err => {
                    expect(err).tobBeNull()
                })
            } else {
                expect(1).toBe(0)
            }
        })
        .catch(err => {
            expect(err).toBeNull()
        })
});

it('"Failing" Test for changing Name', async () => {
    const new_name = "Name Changed"
    const token = "bvvhb60sd0giubi98h98b9o8bi98bu"
    await axios.get(Connect.zeliaLogin)
        .then(async info => {
            const users = info.data
            const user = users.find(c => c.zelia_token === token)
            if (user) {
                user.name = new_name
                await axios.put(Connect.zeliaData, {
                    token: token,
                    user: user
                })
                .then(async info => {
                    expect(info.data.name).not.toEqual('Name not Changed')
                })
                .catch(err => {
                    expect(err).toBeNull()
                })
            } else {
                expect(1).toBe(0)
            }
        })
});