import express from 'express';

const app = express();

app.use(express.static('tiles'));

app.listen(3000, () => {
  console.log(`[!] Express is running on port 3000`);
});
