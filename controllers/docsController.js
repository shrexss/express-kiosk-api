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
            "method": "GET",
            "path": ".../tables/reset_categories",
            "description": "reset categories to default data (requires jwt)"
        }
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
            "description": "return one categorie"
        },
        {
            "method": "POST",
            "path": ".../categories",
            "description": "create a new categorie (requires jwt)"
        },
        {
            "method": "PATCH",
            "path": ".../categories/{id}",
            "description": "update one categorie (requires jwt)"
        },
        {
            "method": "DELETE",
            "path": ".../categories/{id}",
            "description": "delete one categorie (requires jwt)"
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
    ]
}

exports.getDocs = (req, res) => {
    return res.status(200).json( docs );
};