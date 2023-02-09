const pool = require('../db');
const queries = require('./queries');

// user_table controllers
const getUser = (req, res) => {
    pool.query(queries.getUser, (error, results) => {
      if (error) return res.status(500).send(error.message);
      res.status(200).json(results.rows);
    });
  };

const addUser = (req, res) => {
    const { email, username, pw } = req.body;

    // check if email already in use
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email is already in use.");
        }
        // if email is not in use, add user to the db
        pool.query(queries.addUser, [email, username, pw], (error, results) => {
            if (error) return res.status(500).send(error.message);
            res.status(201).send("User created successfully.");
        });
    });
};

const getUserByID = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    pool.query(queries.getUserByID, [user_id], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

const authenticate = (req, res) => {
    const { email, pw } = req.body;
    pool.query(queries.authenticate, [email, pw], (error, results) => {
        if (!results.rows.length) {
            res.send("0");
        }
        else {
            res.send("1");
        }
    })
}

const removeUser = (req, res) => {
    const user_id = parseInt(req.params.user_id);
  
    pool.query(queries.getUserByID, [user_id], (error, results) => {
      const noUserFound = !results.rows.length;
      if (noUserFound) {
        res.send("User does not exist in the database");
      }
  
      pool.query(queries.removeUser, [user_id], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).send("User removed successfully!");
      });
    });
  };
//-----------------------------------------------------------------------
// farm_table controllers
const getFarm = (req, res) => {
    pool.query(queries.getFarm, (error, results) => {
      if (error) return res.status(500).send(error.message);
      res.status(200).json(results.rows);
    });
  };

const addFarm = (req, res) => {
    const { farm_name, farm_description, farm_location} = req.body;

    // check if email already in use
    pool.query(queries.checkFarmExists, [farm_name], (error, results) => {
        if (results.rows.length) {
            res.send("Farm name is already in use.");
        }
        // if email is not in use, add user to the db
        pool.query(queries.addFarm, [farm_name, farm_description, farm_location], (error, results) => {
            if (error) return res.status(500).send(error.message);
            res.status(201).send("Farm successfully added to database.");
        });
    });
};

const getFarmByID = (req, res) => {
    const farm_id = parseInt(req.params.farm_id);
    pool.query(queries.getFarmByID, [farm_id], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

const removeFarm = (req, res) => {
    const farm_id = parseInt(req.params.farm_id);
  
    pool.query(queries.getFarmByID, [farm_id], (error, results) => {
      const noFarmFound = !results.rows.length;
      if (noFarmFound) {
        res.send("Farm does not exist in the database.");
      }
  
      pool.query(queries.removeFarm, [farm_id], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).send("Farm removed successfully from database.");
      });
    });
  };
//-----------------------------------------------------------------------
// product_table controllers
const getProduct = (req, res) => {
    pool.query(queries.getProduct, (error, results) => {
      if (error) return res.status(500).send(error.message);
      res.status(200).json(results.rows);
    });
  };

const getProductByID = (req, res) => {
    const product_id = parseInt(req.params.product_id);
    pool.query(queries.getProductByID, [product_id], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

const addProduct = (req, res) => {
    const { product_name, farm_id, product_type, product_price, product_description, product_location, product_imgfile, product_rating} = req.body;

    // check if product already in use
    pool.query(queries.checkProductExists, [product_name, farm_id], (error, results) => {
        if (results.rows.length) {
            res.send("Product already in database.");
        }
        // if product_name and farm_id is unique, add product to the db
        pool.query(queries.addProduct, [product_name, farm_id, product_type, product_price, product_description, product_location, product_imgfile, product_rating], (error, results) => {
            if (error) return res.status(500).send(error.message);
            res.status(201).send("Product successfully added to database.");
        });
    });
};

const getProductByFarm = (req, res) => {
    const farm_id = parseInt(req.params.farm_id);
    pool.query(queries.getProductByFarm, [farm_id], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

const getProductByType = (req, res) => {
    const product_type = req.params.product_type;
    pool.query(queries.getProductByType, [product_type], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

const getProductByRating = (req, res) => {
    const product_rating = parseInt(req.params.product_rating);
    pool.query(queries.getProductByRating, [product_rating], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
}

const removeProduct = (req, res) => {
    const product_id = parseInt(req.params.product_id);
  
    pool.query(queries.getProductByID, [product_id], (error, results) => {
      const noFarmFound = !results.rows.length;
      if (noFarmFound) {
        res.send("Farm does not exist in the database.");
      }
  
      pool.query(queries.removeProduct, [product_id], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).send("Product removed successfully from database.");
      });
    });
  };

const searchProduct = (req, res) => {
    const search_string = req.params.search_string;
    let str = "SELECT * FROM product_table WHERE ";
    const keywords = search_string.split(" ");
    for (let kw of keywords) {
        str += `UPPER(product_name) LIKE UPPER(('%${kw}%')) OR UPPER(product_type) LIKE UPPER(('%${kw}%')) OR `;
    }
    str = str.slice(0, -4);
    pool.query(str, (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

//-----------------------------------------------------------------------
// cart_table controllers
const getCart = (req, res) => {
    pool.query(queries.getCart, (error, results) => {
      if (error) return res.status(500).send(error.message);
      res.status(200).json(results.rows);
    });
  };

const getCartByUser = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    pool.query(queries.getCartByUser, [user_id], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};


const addCart = (req, res) => {
    const { user_id, product_id, quantity } = req.body;

    // check if email already in use
    pool.query(queries.checkProductExistsInCart, [user_id, product_id], (error, results) => {
        if (results.rows.length) {
            pool.query(queries.increaseCart, [user_id, product_id, quantity], (error, results) => {
                if (error) return res.status(500).send(error.message);
                res.status(201).send("Product successfully added to cart.");
            })
        }
        // if email is not in use, add user to the db
        else {
            pool.query(queries.addCart, [user_id, product_id, quantity], (error, results) => {
                if (error) return res.status(500).send(error.message);
                res.status(201).send("Product successfully added to cart.");
            });
        };
    });
};

const clearCart = (req, res) => {
    const user_id = parseInt(req.params.user_id);
  
    pool.query(queries.getCartByUser, [user_id], (error, results) => {
      const noCartFound = !results.rows.length;
      if (noCartFound) {
        res.send("Cart does not exist in the database.");
      }
  
      pool.query(queries.clearCart, [user_id], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).send("Cart removed successfully from database.");
      });
    });
  };

const reduceCart = (req, res) => {
    const { user_id, product_id } = req.body;
    pool.query(queries.checkProductExistsInCart, [user_id, product_id], (error, results) => {
        const noProductFound = !results.rows.length;
        if (noProductFound) {
            res.send("Product does not exist in the cart.");
        }
        else {
            pool.query(queries.checkProductCount, [user_id, product_id], (error, results) => {
                if (results.rows.length) {
                    pool.query(queries.removeCart, [user_id, product_id], (error, results) => {
                        if (error) return res.status(500).send(error.message);
                        res.status(200).send("Product removed successfully from database.");
                    })
                }
                else {
                    pool.query(queries.increaseCart, [user_id, product_id, -1], (error, results) => {
                        if (error) return res.status(500).send(error.message);
                        res.status(201).send("Product successfully reduced.");
                    })
                }
            });
        };
    });
};

const removeCart = (req, res) => {
    const { user_id, product_id } = req.body;
    pool.query(queries.checkProductExistsInCart, [user_id, product_id], (error, results) => {
        const noProductFound = !results.rows.length;
        if (noProductFound) {
            res.send("Product does not exist in the cart.");
        }
        else {
            pool.query(queries.removeCart, [user_id, product_id], (error, results) => {
                if (error) return res.status(500).send(error.message);
                res.status(200).send("Product removed successfully from database.");
            })
        }
    })
}



module.exports = {
    // user_table
    getUser,
    addUser,
    getUserByID,
    authenticate,
    removeUser,
    // farm_table
    getFarm,
    addFarm,
    getFarmByID,
    removeFarm,
    // product_table
    getProduct,
    searchProduct,
    getProductByID,
    getProductByFarm,
    getProductByType,
    getProductByRating,
    addProduct,
    removeProduct,
    searchProduct,
    // cart_table
    getCart,
    getCartByUser,
    addCart,
    clearCart,
    reduceCart,
    removeCart
};