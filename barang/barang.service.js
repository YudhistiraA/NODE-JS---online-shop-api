const pool = require("../config/database");

module.exports = {
create: (data, callBack) => {
pool.query(
`insert into barang set ?`,[data],
(error, results, fields) => {
if (error) {
  callBack(error);
}
return callBack(null, results[0]);
}
);
},

getUserByUserBarang: (id, callBack) => {
pool.query(
`select id_barang,nama_barang,stok,harga,pemilik_barang from barang where id_barang = ?`,
[id],
(error, results, fields) => {
if (error) {
  callBack(error);
}
return callBack(null, results[0]);
}
);
},
getBarang: callBack => {
pool.query(
`select id_barang,nama_barang,stok,harga,pemilik_barang from barang`,
[],
(error, results, fields) => {
if (error) {
  callBack(error);
}
return callBack(null, results);
}
);
},
// updateBarang: (data, callBack) => {
//   pool.query(
//     `update barang set nama_barang=?, stok=?, harga=?, pemilik_barang=? where id_barang = ?`,
//     [

//       data.nama,
//       data.stok,
//       data.harga,
//       data.pemilik,
//       data.id
//     ],
//     (error, results, fields) => {
//       if (error) {
//         callBack(error);
//       }
//       return callBack(null, results[0]);
//     }
//   );
// },
updateBarang: (data, callBack)=>{
pool.query(
`select * from barang where id_barang=?`,
[data.id_barang],
(err, results)=>{
    if(err){
        return callBack(err)
    }
    if(data.pemilik_barang === results[0].pemilik_barang){
        pool.query(
            `update barang set ? where id_barang=?`,
            [data, data.id_barang],
            (err, result)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, result)
                }
            }
        )
    }else{
         return callBack("false")
     }
}
)

},
deleteBarang: (data, callBack) => {
pool.query(
`select  id_barang from barang where id_barang = ?`,
[data.id],
(error,results,fields)=>{

if(error){
  return callBack(error)
}
else{
pool.query(
  `delete from barang where id_barang = ?`,
  [data.id]);
return callBack(null,results[0])
  }

}
)
},

};