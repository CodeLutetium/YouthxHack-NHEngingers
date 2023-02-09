// user_table
const getUsers = "SELECT * FROM users";
const createuser = "INSERT INTO users (user_id, username, password) VALUES ($1, $2, $3)";
const getUserById = "SELECT * FROM users WHERE user_id = $1";
const deleteUser =  "DELETE * FROM users WHERE user_id = $1";

// cart_table
const getUserCart = "SELECT * FROM carts WHERE user_id = $1";
const addProduct = "INSERT INTO carts (user_id, product_id, quantity) VALUES ($1, $2, $3)";
const reduceProduct = "UPDATE carts SET quantity = $1 WHERE user_id = $2 AND product_id = $3"; //Check if deduction method is correct
const removeProduct = "DELETE * FROM carts WHERE user_id = $1 AND product_id = $2";
const clearCart = "DELETE * FROM carts WHERE user_id = $1";

// product_table
const getProducts = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE product_id = $1";
const getProductsByFarm = "SELECT * FROM products WHERE farm_id = $1";
const getProductsByType = "SELECT * FROM products WHERE product_type = $1";
const getProductsByKeyword = "SELECT * FROM products WHERE product_name = $1"; //Check to see if keyword implementation is correct
const addProductDB = "INSERT INTO products (product_id, product_name, farm_id, product_type, product_price, product_description, product_location, product_imgfilename) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const removeProductDB = "DELETE * FROM products WHERE product_id = $1";

// farm_table
const addFarm = "INSERT INTO farms (farm_id, farm_name, farm_description, farm_location) VALUES ($1, $2, $3, $4)";
const removeFarm = "DELETE * FROM farms WHERE farm_id = $1";
const getFarmByID = "SELECT * FROM farms WHERE farm_id = $1";
const getFarms = "SELECT * FROM farms";

module.exports = {
    getUsers,
    createuser,
    getUserById,
    deleteUser,
    getUserCart,
    addProduct,
    reduceProduct,
    removeProduct,
    clearCart,
    getProducts,
    getProductById,
    getProductsByFarm,
    getProductsByType,
    getProductsByKeyword,
    addProductDB,
    removeProductDB,
    addFarm,
    removeFarm,
    getFarmByID,
    getFarms,
};