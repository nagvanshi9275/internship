import express from 'express';

import cors from 'cors';
import Connect_db from './Database/data.js';
import 'dotenv/config';
//import router from './Routes/route.js';



const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: '*' }));   
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello World! kya hai');
});

Connect_db().catch(err => console.error("Database connection error: ", err));
 
app.get('/fruit', (req, res) => {
  res.send(["apple", "grapes", "orbhi"]);
});

//app.use('/api/users', router);

app.listen(port, () => {
  console.log(`Server is running zaalima at http://localhost:${port}`);
}); 
