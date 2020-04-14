const {
  serviceCekBarang,
  servicePesanBarang
} = require('./transaksi.service');
const { verify } = require('jsonwebtoken')

module.exports={
  controllerCekBarang:(req,res)=>{
      const body = req.body
      serviceCekBarang(body,(err,results)=>{
          if(err){
              if(err === "item not found"){
                  return res.json({
                      success:0,
                      message:"Data Tidak Ditemukan"
                  })
              }
              if(err === "out of stok"){
                  return res.json({
                      success:0,
                      message:"out of stok"
                  })
              }
              console.log(err);
              return;
          }if(!results){
              return res.json({
                  message:"Tidak Ada",
                  data:results
              }) 
          }else{
              return res.json({
                  message:"Tersedia",
                  data:results
              })
          }
      })
  },
  controllerPesanBarang:(req,res)=>{
      const body = req.body
      const token = req.get("authorization")
      if(token){
          let wow = token.slice(7)
          verify(wow,"secretkey",(err,decoded)=>{
              if(err){
                  res.json({
                      success:0,
                      message:"Login First"
                  })
              }else{
                  var user = decoded.result
                  const data = {
                      kodeBarang: body.id_barang,
                      namaBarang : body.nama_barang,
                      jumlah: body.jumlah,
                      namaUser: user.firstname
                  }
                  servicePesanBarang(data,(err,results)=>{
                      if(err){
                          if(err === "out of stok"){
                              return res.json({
                                  success: 0,
                                  message: "Stok Habis"
                              })
                          }
                          if(err === "stok tdk cukup"){
                              return res.json({
                                  success: 0,
                                  message: "Permintaan Terlalu Banyak"
                              })
                          }
                          if(err === "No-Id"){
                              return res.json({
                                  success:0,
                                  message:"Tidak Ditemukan"
                              })
                          }
                          if(err === "myItem"){
                              return res.json({
                                  success: 0,
                                  message: "Barang Milik Sendiri"
                              })    
                          }     
                          console.log(err);      
                          return ;
                      }
                      if(!results){
                          return res.json({
                              success:0,
                              message:"Tidak Ditemukan"
                          })
                      }else{
                          return res.json({
                              success:1,
                              message:"Terpesan" + err
                          })
                      }
                  })
              }
          })
      }
  },
  
}