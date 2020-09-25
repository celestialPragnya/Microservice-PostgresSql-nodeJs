'use strict';

import { Model, Sequelize, DataTypes, Optional } from "sequelize";
import { hashPassword, comparePasswords } from '../utils/password';

// export const initialize = (sequelize: Sequelize) => {
//   class User extends Model {
   
//     static associate(models: any) {
//       // define association here
//     }
//   };
//   User.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

//Reusable user request attributes.
export interface UserRequestAttributes {
  name: string,
  email: string,
  password: string,
};

interface UserAttributes extends UserRequestAttributes {
id: number;
created_at?: Date;
updated_at?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id" | "password"> {}

export class Employee extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public comparePassword(password: string): Promise<boolean> {
    return comparePasswords(password, this.password);
  };
  // Model associations.
  public static associate(models: any) {
    //User.hasOne(models.UserSocialMediaProfiles)
  };
};

export const initialize = (sequelize: Sequelize) => {
  Employee.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },  
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Employee',
    underscored: true,
    hooks: {
      beforeCreate: async (user, options) => {
        if (user.password) {
          const hashedPassword = await hashPassword(user.password);
          user.password = hashedPassword;
        }
      }
    }
  });
  return Employee;
};
export default initialize;