const { Users } = require('../models');

const userData = [
    {
        first_name: "Mark",
        last_name: "Smith",
        email: "msmith@email.com",
        username: "msmith",
        password: "password",
        age: 18,
        createdDate: 
    },
    {
        first_name:
        last_name:
        email:
        username:
        password:
        age:
        createdDate:
    },
    {
        first_name:
        last_name:
        email:
        username:
        password:
        age:
        createdDate:
    },
    {
        first_name:
        last_name:
        email:
        username:
        password:
        age:
        createdDate:
    },
    {
        first_name:
        last_name:
        email:
        username:
        password:
        age:
        createdDate:
    }
]


INSERT INTO user(first_name, last_name, email, username, password, age, createdDate)
VALUES ("Mark","Smith","msmith@email.com" ,"msmith","password",18, "June 22,2023"),
       ("Jane","Roberts","Jroberts@email.com" ,"jroberts1","password",18, "June 22,2023"),
       ("Tom","Brown","tbrown@email.com" ,"tbrown","password",25, "June 22,2023"),
       ("Helen","Paul","hpaul@email.com" ,"hpaul","password",20, "June 22,2023"),
       ("Alex","Jones","alexj@email.com" ,"alexj","password",22, "June 22,2023");