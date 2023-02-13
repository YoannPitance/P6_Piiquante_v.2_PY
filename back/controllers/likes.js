const Sauce = require("../models/sauce-model");

exports.likeSauce = (req, res, next) => {
    const like = req.body.like;
    
    if(like === 1) { 
        Sauce.updateOne({_id: req.params.id}, { $inc: { likes: 1}, $push: { usersLiked: req.body.userId}, _id: req.params.id })
        .then( () => res.status(200).json({ message: 'Vous aimez cette sauce' }))
        .catch( error => res.status(400).json({ error}))
};
