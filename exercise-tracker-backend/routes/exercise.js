const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.get('/', (req,res) => {
    Exercise.find()
            .then(exercises => res.json(exercises))
            .catch(err => res.status(404).json({error: err}));
});

router.post('/add', (req, res) => {
    const {username, description, duration, date} = req.body;
    let parsedDate = Date.parse(date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        parsedDate
    });

    newExercise.save()
                .then(() => res.json({message: 'Exercise added'}))
                .catch(err => res.status(500).json({error: err}));
});

router.get('/:id', (req,res) => {
    Exercise.findById(req.params.id)
            .then(exercise => res.json(exercise))
            .catch(err => res.status(500).json({err}));
});

router.delete('/:id', (req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
            .then(() => res.json({message: 'Exercise deleted!'}))
            .catch(err => res.status(500).json({err}));
});

router.put('update/:id', (req,res) => {
    Exercise.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(() => res.json({message: 'Exercise updated'})
            .catch(err => res.status(500).json({err})));
});

module.exports = router;