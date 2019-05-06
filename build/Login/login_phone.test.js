var axios = require('axios')
var bcrypt = require('bcryptjs')
var Connect = require('../../__mocks__/Globals')

it('"Passing" Test for Login with Phone', async () => {
    const phone = 944701899
    const password = 'lumberjack'
    await axios.get(Connect.zeliaLogin)
            .then(info => {
                const users = info.data
                const user = users.find(c => c.phone === phone)
                if (bcrypt.compareSync(password, user.password)) 
                    expect(1).toBe(1)
                else
                    expect(1).toBe(0)
            })
});

it('"Failing" Test for Login with Phone', async () => {
    const phone = 944701899
    const password = 'lumberjackk'
    await axios.get(Connect.zeliaLogin)
            .then(info => {
                const users = info.data
                const user = users.find(c => c.phone === phone)
                if (bcrypt.compareSync(password, user.password)) 
                    expect(1).toBe(0)
                else
                    expect(1).toBe(1)
            })
});