import mysql from "mysql";

export const db = mysql.createConnection({
    host:"mysql-app-database:3306",
    user:"mysql",
    password:"@Wildcats2019",
    database:"my_database"

    // host:"localhost",
    // user:"root",
    // password:"@Wildcats2019",
    // database:"sqlproj"
});