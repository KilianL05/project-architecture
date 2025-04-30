const express = require('express');
const bodyParser = require('body-parser');
const storageRouter = require('./routes/storageRouter');
const getDatabaseInstance = require('./db');
const Image = require('./models/Image');
const Transformation = require('./models/Transformation');
const transformRoutes = require('./routes/transform');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use('/transform', transformRoutes);
app.use('/storage', storageRouter);


app.listen(PORT, async () => {
  const db = getDatabaseInstance();
  await db.sync();
  console.log(`Server is running on port ${PORT}`);
});
