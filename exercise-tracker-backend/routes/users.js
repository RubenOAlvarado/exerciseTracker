const router = require('express').Router();
let User = require('../models/user.model');


router.get('/', (req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({error: err}));
});

router.post('/add', (req,res) => {
    const {username} = req.body;

    const newUser = new User({username});

    newUser.save()
            .then(() => res.json({message: 'User added'}))
            .catch(err => res.status(500).json({err}));
});


module.exports = router;