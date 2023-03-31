const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3002;

/*mongoose.connect("mongodb://127.0.0.1/Exams", { useNewUrlParser: true });*/
mongoose.connect("mongodb+srv://amanm:123@cluster0.guqm2iq.mongodb.net/test");
const db = mongoose.connection;

const  quizesSchema = new mongoose.Schema({
  name: String,
  sid: String 
});


const Quizes = mongoose.model('Quizes', quizesSchema);
app.use(express.json());


app.get('/', async (req, res) => {
  try {
    const doc = await Quizes.create({
      name: 'Aman Aman',
      sid: '300352187'
    });


    res.send('Document created');
  } catch (err) {
    res.status(500).send('Error creating document');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
