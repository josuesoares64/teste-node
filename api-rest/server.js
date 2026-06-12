/* eslint-disable no-console */
import app from '../api-rest/src/app.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
