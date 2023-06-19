// const mysql = require('mysql'); 


// // creamos una conexión
// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'login',
//     port: '8089'
// });
// // hacemos la conexion
// mysqlConnection.connect(err =>{
//     if(err) {
//         console.log(err);
//         return;
//     }else{
//         console.log('Database OK');
//     }
// });


// // exportamos la conexion
// module.exports = mysqlConnection;

const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'login',
  port: '8080'
});

mysqlConnection.connect( err => {
  if(err){
    console.log('Error en db: ', err);
    return;
  }else{
    console.log('Db ok');
  }
});

module.exports = mysqlConnection;