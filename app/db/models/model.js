import sequelize from '../db.js'
import { DataTypes } from 'sequelize'

const  User = sequelize.define('users',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    first_name:{type:DataTypes.STRING,allowNull:false},
    last_name:{type:DataTypes.STRING,allowNull:false},
    picture:{type:DataTypes.BLOB}
})

export default User