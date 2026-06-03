 import { Sequelize } from "sequelize";
 import mysql2 from "mysql2";
 const db = new Sequelize('bukumahapro', 'avnadmin', 'AVNS_39mweOMP94ZjmkVbaQP', {
     host: "mysql-3b3a52ce-weblanjut12.h.aivencloud.com",
     dialect: "mysql",
     port: 23415
      "define": {
        "timestamps": false
      }
    });
export default db;

/*(async()=>{
await db.sync();
})();*/
