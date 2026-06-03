 import { Sequelize } from "sequelize";
 import mysql2 from "mysql2";
 const db = new Sequelize('defaultdb', 'avnadmin', 'AVNS_39mweOMP94ZjmkVbaQP', {
     host: "mysql-3b3a52ce-weblanjut12.h.aivencloud.com",
     dialect: "mysql",
     port: 23415,
  dialectOptions: {
ssl: {
rejectUnauthorized: false
 }
 },
define: {
timestamps: false
 }
});
export default db;
