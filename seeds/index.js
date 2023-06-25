const sequelize = require('../../project2main/config/connection');
const seedUsers = require("./users-seeds");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    process.exit(0);
}

seedAll();