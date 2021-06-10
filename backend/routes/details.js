
const router = require('express').Router();
let Detail = require('../models/detail.model');

router.route('/').get((req, res) => {
    Detail.find()
        .then(details => res.json(details))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const nic = req.body.nic;
    const age = req.body.age;
    const vtype = req.body.vtype;
    const vdosage = req.body.vdosage;
    const pnumber = req.body.pnumber;
    const district = req.body.district;
    const division = req.body.division;
    const grama = req.body.grama;
    const nearest = req.body.nearest;

    const newDetail = new Detail({
        username,
        name,
        nic,
        age,
        vtype,
        vdosage,
        pnumber,
        district,
        division,
        grama,
        nearest,

    });

    newDetail.save()
        .then(() => res.json('Details added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Detail.findById(req.params.id)
        .then(detail => res.json(detail))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Detail.findByIdAndDelete(req.params.id)
        .then(() => res.json('Details deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Detail.findById(req.params.id)
        .then(detail => {
            detail.username = req.body.username;
            detail.name = req.body.name;
            detail.nic = req.body.nic;
            detail.age = req.body.age;
            detail.vtype = req.body.vtype;
            detail.vdosage = req.body.vdosage;
            detail.pnumber = req.body.pnumber;
            detail.district = req.body.district;
            detail.division = req.body.division;
            detail.grama = req.body.grama;
            detail.nearest = req.body.nearest;

            detail.save()
                .then(() => res.json('Details updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;