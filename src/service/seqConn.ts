import { Sequelize} from "sequelize";
require('dotenv').config();


const sequelize = new Sequelize(process.env.DBURI) 

sequelize.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch((err: Error
    ) => {
console.error('Unable to connect to the database:', err);
});

export default sequelize