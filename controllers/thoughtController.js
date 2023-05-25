const { Thought, User } = require("../models");

module.exports = {
  getAllThoughts(req, res) {
    Thought.find({})
      .select("-__v")
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  postNewThought(req, res) {
    const {username, thoughtText, userId} = req.body;
    Thought.create({username, thoughtText})
      .then((thought) => {
        User.findOneAndUpdate(
        {_id: userId},
        {$push: {thoughts: thought._id}}
      ).then((user) => {
        res.json(thought)
      }).catch((err) => res.status(500).json(err));
    }).catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought affiliated with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  updateThoughtById(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought affiliated with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  removeThoughtById(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then(() => res.json({ message: "Thoughts deleted" }))
      .catch((err) => res.status(500).json(err));
  },

  newReaction(req, res) {
    console.log("You added a reaction");
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
            .status(404)
            .json({ message: "No thought found with that ID :(" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
            .status(404)
            .json({ message: "No Thought affiliated with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};