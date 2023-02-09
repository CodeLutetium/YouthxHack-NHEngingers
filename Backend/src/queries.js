//Get user information
const getUsers = "SELECT * FROM users";
const createuser = "INSERT INTO users (user_id, username, password) VALUES ($1, $2, $3)";
const getUserById = "SELECT * FROM users WHERE user_id = $1";
const deleteUser =  "DELETE * FROM users WHERE user_id = $1";

//Cart information for users
const getUserCart = "SELECT * FROM carts WHERE user_id = $1";
const addProduct = "INSERT INTO carts (user_id. product_id, quantity) VALUES ($1, $2, $3)";
const reduceProduct = "UPDATE carts SET quantity = $1 WHERE user_id = $2 AND product_id = $3"; //Check if deduction method is correct
const removeProduct = "DELETE * FROM carts WHERE user_id = $1 AND product_id = $2";
const clearCart = "DELETE * FROM carts WHERE user_id = $1";

//Product information
const getProducts = "SELECT "

