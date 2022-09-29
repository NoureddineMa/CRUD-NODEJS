const express = require('express'); 
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}))

// Simple Route : 
app.get("/",(req,res) => {
    res.json({message : "Welcome To my app"})
})

// require Routes
require("./app/routes/info.route")(app);



// Set PORT : 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server Running on PORT : ${PORT}`);
})

const db = require("./app/models")
db.sequelize.sync().then( () => {
    console.log("synced db.")
})
.catch((err) => {
    console.log("failed to sync db : " + err.message)
})






