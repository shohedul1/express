const {v4: uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: 'shohidul islam',
        email: 'shohidul@gmail.com',
    },
    {
        id: uuidv4(),
        username: 'islam',
        email: 'islam@gmail.com',
    }
]

module.exports = users;