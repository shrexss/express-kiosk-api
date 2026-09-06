const path = require('path');

exports.getImage = (req, res) => {
    try{
        const imageName = req.params.imageName;

        const imagePath = path.join(__dirname, '..', 'images', `${imageName}`);

        res.type('image/jpeg');
        return res.sendFile(imagePath, (err) => {
            if (err) {
                res.type('json');
                return res.status(404).json({ error: "Image not found" });
            }
        });
    }catch(error){
        console.log("error:", error);
        return res.status(500).json({error: error.message});
    }
}