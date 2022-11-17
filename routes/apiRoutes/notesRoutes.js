const router = require('express').Router();
const { newNote, deleteNote, addNote } = require('../../notes');
const withAuth = require('../../utils/auth');
const db = require('../../db/db.json')


//API Route; GET request
router.get('/', (req, res) =>
  fs.readFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

router.post('/notes', (req, res) => {
    let newNote = {
        
    }

}
)
