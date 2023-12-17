const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./src/handler/user-handler');
const formInputHandlerRouter = require('./src/handler/formInput-handler');
const dashboard = require('./src/handler/data-handler');
const catatanGizi = require('./src/handler/catatangizi-handler');
const rekomendasiBahan = require('./src/handler/rekomendasiBahan-handler');
const registerRouter = require('./src/handler/register-handler');
const loginRouter = require('./src/handler/login-handler');

const app = express();
const port = process.env.PORT || 80;

app.use(bodyParser.json());

app.use(cors());

app.use('/api/auth', registerRouter);
app.use('/api/auth', loginRouter);
app.use('/api/dashboard', dashboard);
app.use('/api/rekomendasiBahan', rekomendasiBahan);
app.use('/api/user', userRouter);
app.use('/api/form', formInputHandlerRouter);
app.use('/api/catatan', catatanGizi);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
