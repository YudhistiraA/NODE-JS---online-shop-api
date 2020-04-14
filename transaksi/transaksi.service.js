const pool = require("../config/database");
module.exports={
    serviceCekBarang:(data,callBack)=>{
        pool.query(
            `select stok from barang where id_barang=?`,
            [data.id_barang],
            (err,results)=>{
                if(err){
                    console.log(err)
                    return callBack(err);   
                }if(results.length < 1){
                    return callBack("item not found")
                }if(results[0].stok <= 0){
                    console.log(results[0].stok);
                    return callBack("out of stok");

                }else{
                    return callBack(null,results[0]);
                }
            }
        )
    },
    servicePesanBarang:(data,callBack)=>{
        pool.query(
            `select * from barang where id_barang=?`,
            [data.kodeBarang],(err,results)=>{
                if(err){
                    console.log(err);
                    return callBack(err)
                }if(results.length < 1){
                    return callBack("No-Id")  
                }else if(results[0].stok <= 0){
                    return callBack("out of stok")
                }else if(results[0].stok < data.stok){
                    return callBack("stok tdk cukup")
                }else if(data.namaUser === results[0].namaUser){
                    return callBack("myItem")
                }
                else{
                    const data_barang = results[0];
                    const total = data_barang.harga * data.jumlah
                    const hasil = results[0].stok - data.jumlah
                    console.log(results[0].namaBarang);
                    pool.query(
                        `update barang set stok=? where id_barang=?`,
                        [
                            hasil,
                            data.kodeBarang
                        ]
                    );
                    pool.query(
                        `insert into transaksi(nama_barang,pemilik_barang,harga,jumlah,
                            total,pembeli)
                            values(?,?,?,?,?,?)`,
                            [
                                data_barang.nama_barang,
                                data_barang.pemilik_barang,
                                data_barang.harga,
                                data.jumlah,
                                total,
                                data.namaUser
                            ], (err, res)=>{
                              console.log(res ,err)
                            }
                    )
                    return callBack(null,results[0])
                }
            }
        )
    }
}