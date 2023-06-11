import { Sequelize } from "sequelize";

const db = new Sequelize("tokotipu_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
