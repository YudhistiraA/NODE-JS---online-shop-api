const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  controllerCekBarang,
  controllerPesanBarang
  
} = require("./transaksi.controller");
router.get('/',checkToken,controllerCekBarang)
router.post('/',checkToken,controllerPesanBarang)

module.exports = router;
