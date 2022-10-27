import { Sequelize } from "sequelize";
import { environment } from "../../environments/environment";

const credentials = {
  host: environment.production ? process.env.PROD_DATABASE_HOST : process.env.DATABASE_HOST
};


module.exports = new Sequelize("blogs", "root", "saksham25@", {
  host: credentials.host,
  dialect: "mysql"
});
