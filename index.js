//import the express package
import express from 'express';

// creating an instance of express

const app = express();

//use this port for our server
const port =5000;

//create a route to handle Get request on the index route 
app.get("/",(Request,Response)=>{
    Response.send("We Backend Developers Are Back")
});
 //create a endpoint to get all todos
 app.get("/todos", (res, res)=>
 {
     //all LL DATABASE
     res.json([
         {
             title:"Connect to the database",
             description:"to store and read all our todos from the database",
             date:"26/11/2021",
             time:"4:00pm",
             isCcomplete:false,
         },
     ])
 }
 )
//listen to incoming reguest on this port
app.listen(port, () =>
console.log(`Server is running on: ${port}`)
);