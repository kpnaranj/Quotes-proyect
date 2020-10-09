//1. Import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import Quote from "inspirational-quotes";
//2. Set up backend express
const app=express();

//3. Initialize json body
app.use(bodyParser.json());

//4. Add variables to be used in the code

const startResponse = (req, res)=>{
    res.send(Quote.getQuote())
    //We receive a quote when we run the server
}

const portListen = ()=>{
    console.log(`app is listening to port 4000`);
}

//4. Receive response from the server

app.get('/', startResponse)

//5. Start the app listener 
app.listen(4000, portListen)

