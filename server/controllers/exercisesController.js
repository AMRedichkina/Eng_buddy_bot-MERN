const exercises = [
    { title: 'Grammar Practice', difficulty: 'Beginner', topic: 'Grammar', rating: 4, id: 1 },
    { title: 'Vocabulary Expansion', difficulty: 'Intermediate', topic: 'Vocabulary', rating: 5, id: 2 },
    { title: 'Listening Comprehension', difficulty: 'Advanced', topic: 'Listening', rating: 3, id: 3 },
    { title: 'Grammar Practice', difficulty: 'Beginner', topic: 'Grammar', rating: 4, id: 4 },
    { title: 'Vocabulary Expansion', difficulty: 'Intermediate', topic: 'Vocabulary', rating: 5, id: 5 },
    { title: 'Listening Comprehension', difficulty: 'Advanced', topic: 'Listening', rating: 3, id: 6 }
];
function listExercises(req, res) {
    res.render('exercises', { exercises: exercises });
}

function getExerciseById(req, res) {
    const exerciseId = req.params.id;
    const exercise = exercises.find(ex => ex.id == exerciseId);

    if (exercise) {
        res.render('exercise', { exercise: exercise });
    } else {
        res.status(404).send('Exercise not found');
    }
}

module.exports = {
    listExercises: listExercises,
    getExerciseById: getExerciseById
};