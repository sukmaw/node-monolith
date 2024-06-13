const pg = require('pg')

const db = new pg.Pool({
  connectionString: "postgresql://postgres:1@db:5432/postgres?sslmode=disable",
});

db.on("connect", ()=>{
    console.log("DB Connected")
})

module.exports = db