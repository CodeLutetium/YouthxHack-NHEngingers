// user_table
const getUser = "SELECT * FROM user_table";
const checkEmailExists = "SELECT email FROM user_table WHERE email = $1";
const addUser = "INSERT INTO user_table (user_id, email, username, pw) VALUES (DEFAULT, $1, $2, $3)";
const getUserByID = "SELECT * FROM user_table WHERE user_id = $1";
const removeUser = "DELETE FROM user_table WHERE user_id = $1";
const authenticate = "SELECT * FROM user_table WHERE email = $1 AND pw = $2";
//farm_table
const getFarm = "SELECT * FROM farm_table";
const checkFarmExists = "SELECT farm_name FROM farm_table WHERE farm_name = $1";
const addFarm = "INSERT INTO farm_table (farm_id, farm_name, farm_description, farm_location) VALUES (DEFAULT, $1, $2, $3)";
const getFarmByID = "SELECT * FROM farm_table WHERE farm_id = $1";
const removeFarm = "DELETE FROM farm_table WHERE farm_id = $1";
//product_table
const getProduct = "SELECT * FROM product_table";
const getProductByID = "SELECT * FROM product_table WHERE product_id = $1";
const checkProductExists = "SELECT * FROM product_table WHERE product_name = $1 AND farm_id = $2";
const addProduct = "INSERT INTO product_table (product_id, product_name, farm_id, product_type, product_price, product_description, product_location, product_imgfile, product_rating) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8)";
const getProductByFarm = "SELECT * FROM product_table WHERE farm_id = $1";
const getProductByType = "SELECT * FROM product_table WHERE product_type = $1";
const getProductByRating = "SELECT * FROM product_table WHERE product_rating = $1";
const removeProduct = "DELETE FROM product_table WHERE product_id = $1";
// cart_table
const getCart = "SELECT * FROM cart_table";
const getCartByUser = "SELECT * FROM cart_table WHERE user_id = $1";
const checkProductExistsInCart = "SELECT * FROM cart_table WHERE user_id = $1 AND product_id = $2";
const increaseCart = "UPDATE cart_table SET quantity = quantity + $3 WHERE user_id = $1 AND product_id = $2";
const addCart = "INSERT INTO cart_table (user_id, product_id, quantity) VALUES ($1, $2, $3)";
const clearCart = "DELETE FROM cart_table WHERE user_id = $1";
const checkProductCount = "SELECT * FROM cart_table WHERE user_id = $1 AND product_id = $2 AND quantity = 1";
const removeCart = "DELETE FROM cart_table WHERE user_id = $1 AND product_id = $2";

module.exports = {
    getUser,
    checkEmailExists,
    addUser,
    getUserByID,
    removeUser,
    authenticate,
    getFarm,
    checkFarmExists,
    addFarm,
    getFarmByID,
    removeFarm,
    getProduct,
    getProductByID,
    checkProductExists,
    addProduct,
    getProductByFarm,
    getProductByType,
    getProductByRating,
    removeProduct,
    getCart,
    getCartByUser,
    checkProductExistsInCart,
    increaseCart,
    addCart,
    clearCart,
    checkProductCount,
    removeCart,
};