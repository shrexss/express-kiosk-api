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
            "description": "updates one user (requires jwt)"
        },
        {
            "method": "DELETE",
            "path": ".../users/{id}",
            "description": "deletes one user (requires jwt)"
        },
    ]
}

exports.getDocs = (req, res) => {
    return res.status(200).json( docs );
};