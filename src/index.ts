import 'dotenv/config';
import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('tiles'));

app.listen(port, () => {
  console.log(`[!] Express is running on port ${port}`);
});
