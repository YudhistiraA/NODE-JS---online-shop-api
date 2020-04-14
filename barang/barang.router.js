const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  createBarang,  
  getUserByUserBarang,
  getBarang,
  updateBarang,
  deleteBarang
} = require("./barang.controller");
router.get("/", checkToken, getBarang);
router.post("/", checkToken, createBarang);
router.get("/:id", checkToken, getUserByUserBarang);

router.patch("/", checkToken, updateBarang);
router.delete("/", checkToken, deleteBarang);

module.exports = router;