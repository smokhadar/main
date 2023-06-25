const { User } = require('../models');

const userData = [
    {
        firstName: "Mark",
        lastName: "Smith",
        email: "msmith@email.com",
        username: "msmith",
        password: "password",
        age: 18,
    },
    {
        firstName: "Jane",
        lastName: "Roberts",
        email: "Jroberts@email.com",
        username: "jroberts1",
        password: "password",
        age: 18,
    },
    {
        firstName: "Tom",
        lastName: "Brown",
        email: "tbrown@email.com",
        username: "tbrown",
        password: "password",
        age: 25
    },
    {
        firstName: "Helen",
        lastName: "Paul",
        email: "hpaul@email.com",
        username: "hpaul",
        password: "password",
        age: 20
    },
    {
        firstName: "Alex",
        lastName: "Jones",
        email: "ajones@email.com",
        username: "ajones",
        password: "password",
        age: 22
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
