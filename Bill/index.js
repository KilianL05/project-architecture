const express = require('express');
const storageRouter = require('./routes/storageRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/storage', storageRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
