import random from 'random';
import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/random', function (req, res) {
  const randomFloat = random.float();
  res.json({ randomFloat: randomFloat });
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(__dirname, { "extensions": ["css"] }));
app.use('/', router);

app.listen(process.env.port || 3000);
console.log('Running at Port 3000');
