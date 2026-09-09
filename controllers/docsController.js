const docs = {
    "auth": [
        {
            "method": "POST",
            "path": ".../auth/register",
            "description": "register a new user"
        },
        {
            "method": "POST",
            "path": ".../auth/login",
            "description": "log into an existing user and receive a JWT"
        }
    ],
    "tables": [
        {
            "method": "GET",
            "path": ".../tables",
            "description": "return all tables and columns in database (requires jwt)"
        },
        {
            "method": "POST",
            "path": ".../tables/reset_DB",
            "description": "reset whole database to default (requires jwt)"
        },
    ],
    "users": [
        {
            "method": "GET",
            "path": ".../users",
            "description": "return all users (requires jwt)"
        },
        {
            "method": "GET",
            "path": ".../users/{id}",
            "description": "return one user (requires jwt)"
        },
        {
            "method": "PATCH",
            "path": ".../users/{id}",
            "description": "update one user (requires jwt)"
        },
        {
            "method": "DELETE",
            "path": ".../users/{id}",
            "description": "delete one user (requires jwt)"
        },
    ],
    "categories": [
        {
            "method": "GET",
            "path": ".../categories",
            "description": "return all categories"
        },
        {
            "method": "GET",
            "path": ".../categories/{id}",
            "description": "return one category"
        },
        {
            "method": "POST",
            "path": ".../categories",
            "description": "create a new category (requires jwt)"
        },
        {
            "method": "PATCH",
            "path": ".../categories/{id}",
            "description": "update one category (requires jwt)"
        },
        {
            "method": "DELETE",
            "path": ".../categories/{id}",
            "description": "delete one category (requires jwt)"
        },
    ],
    "meals": [
        {
            "method": "GET",
            "path": ".../meals",
            "description": "return all meals"
        },
        {
            "method": "GET",
            "path": ".../meals/{id}",
            "description": "return one meal"
        },
        {
            "method": "POST",
            "path": ".../meals",
            "description": "create a new meal (requires jwt)"
        },
        {
            "method": "PATCH",
            "path": ".../meals/{id}",
            "description": "update one meal (requires jwt)"
        },
        {
            "method": "DELETE",
            "path": ".../meals/{id}",
            "description": "delete one meal (requires jwt)"
        },
    ],
    "selected_meal": [
        {
            "method": "GET",
            "path": ".../selected_meal/{id}",
            "description": "return selected meal"
        }
    ],
    "products": [
        {
            "method": "GET",
            "path": ".../products",
            "description": "return all products"
        },
        {
            "method": "GET",
            "path": ".../products/{id}",
            "description": "return one product"
        },
        {
            "method": "POST",
            "path": ".../products",
            "description": "create a new product (requires jwt)"
        },
        {
            "method": "PATCH",
            "path": ".../products/{id}",
            "description": "update one product (requires jwt)"
        },
        {
            "method": "DELETE",
            "path": ".../products/{id}",
            "description": "delete one product (requires jwt)"
        }
    ],
    "ingredients": [
        {
            "method": "GET",
            "path": ".../ingredients",
            "description": "return all ingredients"
        },
        {
            "method": "GET",
            "path": ".../ingredients/{id}",
            "description": "return one ingredient"
        },
        {
            "method": "POST",
            "path": ".../ingredients",
            "description": "create a new ingredient (requires jwt)"
        },
        {
            "method": "PATCH",
            "path": ".../ingredients/{id}",
            "description": "update one ingredient (requires jwt)"
        },
        {
            "method": "DELETE",
            "path": ".../ingredients/{id}",
            "description": "delete one ingredient (requires jwt)"
        }
    ],
    "meals_products": [
        {
            "method": "GET",
            "path": ".../meals_products",
            "description": "return all meals_products"
        },
        {
            "method": "GET",
            "path": ".../meals_products/{id}",
            "description": "return one meals_products"
        },
        {
            "method": "POST",
            "path": ".../meals_products",
            "description": "create a new meals_products (requires jwt)"
        },
        {
            "method": "PATCH",
            "path": ".../meals_products/{id}",
            "description": "update one meals_products (requires jwt)"
        },
        {
            "method": "DELETE",
            "path": ".../meals_products/{id}",
            "description": "delete one meals_products (requires jwt)"
        }
    ],
    "products_ingredients": [
        {
            "method": "GET",
            "path": ".../products_ingredients",
            "description": "return all products_ingredients"
        },
        {
            "method": "GET",
            "path": ".../products_ingredients/{id}",
            "description": "return one products_ingredients"
        },
        {
            "method": "POST",
            "path": ".../products_ingredients",
            "description": "create a new products_ingredients (requires jwt)"
        },
        {
            "method": "PATCH",
            "path": ".../products_ingredients/{id}",
            "description": "update one products_ingredients (requires jwt)"
        },
        {
            "method": "DELETE",
            "path": ".../products_ingredients/{id}",
            "description": "delete one products_ingredients (requires jwt)"
        }
    ],
    "images": [
        {
            "method": "GET",
            "path": ".../images/{imageName}",
            "description": "return image"
        },
    ],

}

exports.getDocs = (req, res) => {
    return res.status(200).json( docs );
};