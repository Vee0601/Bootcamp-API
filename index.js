import express from 'express';
const app = express();
app.get('/longestWord/:sentence', (req, res) => {
  const sentence = req.params.sentence;
  const words = sentence.split(' ');
  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  res.send(longestWord);
});
console.log(app.get('/longestWord/:sentence'));
app.get('/shortestWord/:sentence', (req, res) => {
  const sentence = req.params.sentence;
  const words = sentence.split(' ');
  let shortestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }
  res.send(shortestWord);
});
console.log(app.get('/shortestWord/:sentence'));
app.get('/wordLengths/:sentence', (req, res) => {
  const sentence = req.params.sentence;
  const words = sentence.split(' ');
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    sum += words[i].length;
  }
  res.send(sum.toString());
});
console.log(app.get('/wordLengths/:sentence'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));