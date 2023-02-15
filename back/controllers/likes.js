/*const Sauce = require("../models/sauce-model");

exports.likeSauce = (req, res, next) => {
  const like = req.body.like;
  const userId = req.body.userId;
  const sauceId = req.params.id;

  if (like === 1) {
    Sauce.updateOne(
      { _id: sauceId },
      {
        $inc: { likes: +1 },
        $push: { usersLiked: userId },
      }
    )
      .then(() => res.status(200).json({ message: "Vous aimez cette sauce !" }))
      .catch((error) => res.status(400).json({ error }));
  }

  if (like === -1) {
    Sauce.updateOne(
      { _id: sauceId },
      {
        $push: { usersDisliked: userId },
        $inc: { dislikes: +1 }, // On incrémente de 1
      }
    )
      .then(() => {
        res.status(200).json({ message: "Vous n'aimez pas cette sauce !" });
      })
      .catch((error) => res.status(400).json({ error }));
  }

  if (like === 0) {
    Sauce.findOne({ _id: sauceId })
      .then((sauce) => {
        if (sauce.usersLiked.includes(userId)) {
          Sauce.updateOne(
            { _id: sauceId },
            { $pull: { usersLiked: userId }, $inc: { likes: -1 } }
          )
            .then(() =>
              res.status(200).json({ message: "Vous avez retiré votre Like !" })
            )
            .catch((error) => res.status(400).json({ error }));
        }
        if (sauce.usersDisliked.includes(userId)) {
          Sauce.updateOne(
            { _id: sauceId },
            { $pull: { usersDisliked: userId }, $inc: { dislikes: -1 } }
          )
            .then(() =>
              res
                .status(200)
                .json({ message: "Vous avez retiré votre Dislike !" })
            )
            .catch((error) => res.status(400).json({ error }));
        }
      })
      .catch((error) =>
        res.status(404).json({
          error,
        })
      );
  }
};
*/
