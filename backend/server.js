const express = require('express')

const {ObjectId} = require('mongodb')
const { connectToDb, getDb } = require('./db/db');
const PORT = 3000;

const app = express();

app.use(express.json())

let db;


const handleError = (res,err) => {
  res.status(500).json({err})
}

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});

app.get('/ceramics', (req, res) => {
  const ceramics = [];

  db
    .collection('ceramics')
    .find()
    .sort({ title: 1 })
    .forEach((ceramic) => ceramics.push(ceramic))
    .then(() => {
      res
        .status(200)
        .json(ceramics);
    })
    .catch(() => handleError(res,'something goes wrong'))
});

app.get('/ceramics/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
      db
      .collection('ceramics')
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((doc) => {
        res
          .status(200)
          .json(doc);
      })
      .catch(() => handleError(res, "Something goes wrong..."));
    } else {
      handleError(res, "Wrong id");
    }
  });

  app.delete('/ceramics/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
      db
      .collection('ceramics')
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((result) => {
        res
          .status(200)
          .json(result);
      })
      .catch(() => handleError(res, "Something goes wrong..."));
    } 
  });


app.post('/ceramics',(req,res)=>{
  db
  .collection('ceramics')
  .insertOne(req.body)
  .then((result) => {
    res
      .status(201)
      .json(result);
  })
  .catch(() => handleError(res, "Something goes wrong..."));
})

app.patch('/ceramics/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db
    .collection('ceramics')
    .updateOne({ _id: new ObjectId(req.params.id) },{$set:req.body})
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  } 
});