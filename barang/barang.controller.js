const {
    create,
    getUserByUserBarang,
    getBarang,
    updateBarang,
    deleteBarang
  } = require("./barang.service");
  const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
  const { verify }=require('jsonwebtoken')
  module.exports = {
    createBarang: (req, res) => {
      const body = req.body;
      let token = req.get("authorization");
      if(token){
          let wow = token.slice(7)
          verify(wow,"secretkey",(err,decoded)=>{
      if(err){
        console.log(err);
          res.json({
              success:0,
              message:"login first" + err
          })
      }else{
          var user = decoded.result
          const data ={
              nama_barang :body.nama,
              stok:body.stok,
              harga:body.harga,
              pemilik_barang:user.firstname
          }
       create(data, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror" +err
          });
        }
        return res.status(200).json({
          success: 1,
          account:decoded,
          data: results
        });
      });
    }})
}
    },
   
    getUserByUserBarang: (req, res) => {
      const id = req.params.id;
      getUserByUserBarang(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        results.password = undefined;
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    getBarang: (req, res) => {
      getBarang((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    
    updateBarang: (req, res)=>{
      const body = req.body;
      let token = req.get("authorization");
      if(token){
          let wow = token.slice(7)
          verify(wow,"secretkey",(err,decoded)=>{
      if(err){
        console.log(err);
          res.json({
              success:0,
              message:"login first" + err
          })
              }else{
                  var user = decoded.result
                  const data ={
                    id_barang : body.id,
                    nama_barang :body.nama,
                    stok:body.stok,
                    harga:body.harga,
                    pemilik_barang:user.firstname
                  }
                  updateBarang(data, (err, results)=>{
                      if(err){
                          if(err === "false"){
                              return res.json({
                                  success: 0,
                                  message: "user account access denied to access data"
                              })
                          }
                          else{
                              return console.log(err)
                          }
                      }if(!results){
                          console.log(results)
                          return res.json({
                              success: 0,
                              message: "Data Not Found"
                          })
                      }else{
                          return res.json({
                              success: 1,
                              message: "Update succesfuly"
                          })
                      }
                  })
              }
          })
      }
  },

    deleteBarang: (req, res) => {
      const data = req.body;
      deleteBarang(data, (err,results) => {
       
        if (err) {
         
            console.log(err)
          
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "not found"
          });
        }else{
          return res.json({
            success: 1,
            message: "deleted sucses"
          })
        }
     
      });
    },
  
  };