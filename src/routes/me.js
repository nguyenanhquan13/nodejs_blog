const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
const route = require('.');

// meController.index

router.get('/stored/courses', meController.storedCourses);

module.exports = router;
