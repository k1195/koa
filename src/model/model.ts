import sequelize from "../service/seqConn"
import { DataTypes } from "sequelize"

const Customer = sequelize.define('Customer',{
    
    customerId:{
       type : DataTypes.BIGINT,
       autoIncrement: true,
    primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      Email:{
          type: DataTypes.STRING
      }

})

Customer.sync();

export default Customer

