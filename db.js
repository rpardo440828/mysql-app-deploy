import mysql from "mysql";

export const db = mysql.createConnection({
    host:"us-cluster-east-01.k8s.cleardb.net",
    user:"b00a11bcd68c93",
    password:"60e69693",
    database:"heroku_f06e8b7c58d386f"

    // host:"localhost",
    // user:"root",
    // password:"@Wildcats2019",
    // database:"sqlproj"
});

// mysql://b00a11bcd68c93:60e69693@us-cluster-east-01.k8s.cleardb.net/heroku_f06e8b7c58d386f?reconnect=true