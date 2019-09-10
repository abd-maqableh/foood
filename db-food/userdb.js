  
const db = require("../database");
console.log("db:", db);


///////creatdefult
let creatdefult = (cb) => {
  db.userdata.create(
   {firstName: "yasmin",
    lastName: "Alhajjaj",
    phone: 1234567890,
    email:"yasmin.alhajjaj@gmail.com",
    password:"123456"},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

///////////////newuser
// let newuser = (cb,name,phone,balance,password) => {
//   db.userdata.create({ name: name,
//     phone: phone,
//     balance:balance,
//     password:password},
//      (err, data) => {
//     if (err) {
//       cb(err)
//     } else {
//       cb(data)
//     }
//   })
// }


///////////getall
let getall = cb => {
  db.userdata.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("data:", data);
      cb(data);
    }
  });
};



//////////////getlogin
// let getlogin = (cb,name,password) => {
//   db.userdata.find({name:name , password:password}, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       console.log("data:", data);
//       cb(data);
//     }
//   });
// };


module.exports = {
  creatdefult,
    newuser,
    getall,
    getlogin
};
