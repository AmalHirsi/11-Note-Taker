const router = require("express").Router();

// Import our modular routers for /tips and /feedback
const notesRoutes = require('./notesRoutes');


router.use('/notesRoutes');

module.exports = router;