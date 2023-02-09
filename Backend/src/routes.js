const { Router } = require("express");
const controller = require("./controller");

const router  = Router();

// user_table
router.get("/user", controller.getUser); // gets all users
router.post("/user", controller.addUser); // adds user, don't pass user_id
router.get("/user/:user_id", controller.getUserByID); // gets user by id
router.post("/user/authenticate", controller.authenticate); // checks if email and pw is correct, returns "0" or "1"
router.delete("/user/:user_id", controller.removeUser); // remove user by id

// farm_table
router.get("/farm", controller.getFarm); // get all farms
router.get("/farm/:farm_id", controller.getFarmByID); // get farms by farm id
router.post("/farm", controller.addFarm); // add farm, don't pass farm id
router.delete("/farm/:farm_id", controller.removeFarm); // remove farm by farm id

// product_table
router.get("/product", controller.getProduct); // get all products
router.get("/product/search/:search_string", controller.searchProduct); // search for products with search string
router.get("/product/:product_id", controller.getProductByID); // get product by id
router.get("/product/farm_id/:farm_id", controller.getProductByFarm); // get product by farm id
router.get("/product/product_type/:product_type", controller.getProductByType); // get product by product type
router.get("/product/product_rating/:product_rating", controller.getProductByRating); // get product by rating
router.post("/product", controller.addProduct); // add new product to db
router.delete("/product/:product_id", controller.removeProduct) // delete product by product id

// cart_table
router.get("/cart", controller.getCart); // get all carts
router.get("/cart/:user_id", controller.getCartByUser); // get cart of a user
router.post("/cart", controller.addCart); // add item to user's cart
router.post("/cart/reduce", controller.reduceCart); // remove 1 product from user's cart
router.post("/cart/remove", controller.removeCart); // remove entire product from user's cart
router.delete("/cart/clear/:user_id", controller.clearCart); // remove entire user's cart

module.exports = router;