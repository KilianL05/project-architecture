const express = require('express');
const bodyParser = require('body-parser');
const getDatabaseInstance = require('./db');
const apiRouter = require('./routes/apiRouter');
const Image = require('./models/Image');
const Transformation = require('./models/Transformation');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use('/api', apiRouter);

app.listen(PORT, async () => {
  const db = getDatabaseInstance();
  await db.sync();
  console.log(`Server is running on port ${PORT}`);
});
