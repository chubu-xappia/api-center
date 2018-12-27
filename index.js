const app = require('./app');

require('dotenv').config();
require('./db/index');

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server Listening: ${process.env.PORT || 3001}`)
});
