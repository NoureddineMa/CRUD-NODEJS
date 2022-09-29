module.exports = app => {
    const infos = require("../controller/info.controller")
    let router = require("express").Router();

     // create: 
     router.post("/", infos.create)
     // get all:
     router.get("/", infos.findAll);
     // Delete a info with id
     router.delete("/:id", infos.delete);
     // get one info with id
     router.get("/:id", infos.findOne);
     // Update a Tutorial with id
     router.put("/:id", infos.update);
     //  Delete all :
     // Delete all Tutorials
     router.delete("/", infos.deleteAll);




     
     app.use("/api/infos" ,router)
}

