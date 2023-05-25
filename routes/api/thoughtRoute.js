const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  postNewThought,
  updateThoughtById,
  removeThoughtById,
  newReaction,
  removeReaction
} = require('../../controllers/thoughtController.js');


router.route('/').get(getAllThoughts).post(postNewThought);


router.route('/:thoughtId').get(getSingleThought)
  .put(updateThoughtById).delete(removeThoughtById);

router.route('/:thoughtId/reaction').post(newReaction);
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;