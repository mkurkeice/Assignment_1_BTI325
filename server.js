/*********************************************************************************
*  BTI325 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _Manualla_Kurkeice__ Student ID: __163009228___ Date: ___9/26/2024____
*
*  Online (Vercel) URL: __https://vercel.com/manualla-kurkeices-projects/assignment-1-bti-325___
*
********************************************************************************/ 


app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
require('pg'); // explicitly require the "pg" module
const Sequelize = require('sequelize'); 

//console.log("Manualla Kurkeice - 163009228")

//im using the arrow function - ES6 function syntax
const helloWorld = () => {        
    console.log("Manualla Kurkeice - 163009228")
} 
helloWorld();