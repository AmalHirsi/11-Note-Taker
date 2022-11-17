const router = require('express').Router();
const { uniqid} = require('uniqid');
const db = require('../../db/db.json')




router.get('/', (req, res) =>
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);


router.post('/notes', (req, res) => {

  const newNote = {
  id: uniqid(),
  title: req.body.title,
  text: req.body.text
  }

  fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      const result = JSON.parse(data);
      result.push(newNote);

  fs.writeFile('./db/db.json',JSON.stringify(result), (err) => {
    if (err) throw err;
    res.json(result)
  });    

  });
});


module.exports = router;

