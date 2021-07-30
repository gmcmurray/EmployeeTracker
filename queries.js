
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password
      password: 'pass',
      database: 'organization_db'
    },
    console.log(`Connected to the organization_db database.`)
  );

function selectdb(table){
db.query(`SELECT * FROM ${table}`, (err,results) =>{
        if(err){return console.log('{error:err.message}')}
    return JSON.parse(results)
    })
}

// db.query(`DELETE FROM movies WHERE id=?`, req.params.id,(err,results)=>{
//     if(err){res.status(500).json({error:err.message})}
//     else if (!results.affectedRows){ res.json({msg:"movie not found"})}
//     else{
//         res.json({msg:"deleted",changes:results.affectedRows,id:req.params.id})
//     }
// })

let sql =`SELECT * FROM department`;
db.query(sql, (err, rows) => {
    if (err) {
      console.log('{ error: err.message }');
       return;
    }
    return rows;
  });

  module.exports = selectdb