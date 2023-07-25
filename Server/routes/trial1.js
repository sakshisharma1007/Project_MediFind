const express = require('express');
const router = express.Router();


const {
    loginUser,
    signupUser,
    contactForm,
    getShops,
    updateShops,
    updateMedicines,
    getMedicines,
    deleteMedicine

} = require('../controller/controls');

router.use(express.json());



router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/contact', contactForm);
router.get('/shop', getShops);
router.get('/editableShop', getShops);
router.delete('/delete/:id', deleteMedicine);
//router.get('/get-one-for-update/:id', getOneUser);
router.put('/update/:id', updateShops);
router.put('/update/:id', updateMedicines);
router.get('/shop', getMedicines);
router.get('/editableShop', getMedicines);







module.exports = router;