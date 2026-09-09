const path = require('path');
const fs = require('fs');

exports.getImage = (req, res) => {
    try{
        const imagePath = path.join(__dirname, '..', req.params.imagePath[0], req.params.imagePath[1], req.params.imagePath[2]);
        
        if (!fs.existsSync(imagePath)) {
            return res.status(404).json({ error: "Image not found" });
        }
        return res.sendFile(imagePath, (err) => {
            if (err && !res.headersSent) {
                return res.status(404).json({ error: "Image not found" });
            }
        });
    }catch(error){
        console.log("error:", error);
        return res.status(500).json({error: error.message});
    }
}