const { Router } = require("express");
const controller = require("./controller");

const router  = Router();

// user_table
router.get("/user", controller.getUser);
router.post("/user", controller.addUser);
router.get("/user/:user_id", controller.getUserByID);
router.delete("/user/:user_id", controller.removeUser);

// farm_table
router.get("/farm", controller.getFarm);
router.get("/farm/:farm_id", controller.getFarmByID);
router.post("/farm", controller.addFarm);
router.delete("/farm/:farm_id", controller.removeFarm)

// product_table
router.get("/product", controller.getProduct);
router.get("/product/search/:search_string", controller.searchProduct);
router.get("/product/:product_id", controller.getProductByID);
router.get("/product/farm_id/:farm_id", controller.getProductByFarm);
router.get("/product/product_type/:product_type", controller.getProductByType);
router.get("/product/product_rating/:product_rating", controller.getProductByRating);
router.post("/product", controller.addProduct);
router.delete("/product/:product_id", controller.removeProduct)

// cart_table
router.get("/cart", controller.getCart);
router.get("/cart/:user_id", controller.getCartByUser);
router.post("/cart", controller.addCart);
router.post("/cart/reduce", controller.reduceCart);
router.post("/cart/remove", controller.removeCart);
router.delete("/cart/clear/:user_id", controller.clearCart);

module.exports = router;