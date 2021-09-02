import express from 'express';
import {routes} from "./routes/index.js";

const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json()); // Let's us parse or read json information from the body
app.use(express.urlencoded({extended: true})); // Let's us access the body of the requests.

app.use(routes);
  
app.listen(PORT,() => {
    console.log(`Listening on: ${PORT}`);
})
