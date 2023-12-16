import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import config from 'config';
import authRoute from './routes/authRoute';
import mongoose from 'mongoose';

const app = express();
const PORT = config.get('common.PORT');

app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());

// //Parse json from url and req.body
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// gzip compression
// app.use(compression());

// upload file
// app.use(
//     fileUpload({
//         useTempFiles: true,
//     })
// );
mongoose
    .connect(config.get('common.DB') || '')
    .then(() => console.log('DB connected.'))
    .catch((err) => console.log(err));

app.use(authRoute);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
