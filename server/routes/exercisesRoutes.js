const express = require("express");
const router = express.Router();
const { listExercises, getExerciseById } = require('../controllers/exercisesController');

router.get('/', listExercises);
router.get('/:id', getExerciseById);

module.exports = router;
