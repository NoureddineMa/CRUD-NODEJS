const db = require("../models")
const Info = db.infos;


exports.create = (req,res) => {
    // // validate req
    // if (!req.body.nom){
    //     res.status(400).send({
    //         message : "content can not be empty"
    //     })
    //     return;
    // }



    // create a row info: 
    const info = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        phone: req.body.phone,
        age: req.body.age
    };

    Info.create(info).then(data => {
        res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "ERROR"
            })
        })
}

    // Get all infos:
    exports.findAll = (req, res) => {
        const info = req.query.info;
      
        Info.findAll(info)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
      };
      

      // get one info row : 
      exports.findOne = (req, res) => {
        const id = req.params.id;
      
        Info.findByPk(id)
          .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(404).send({
                message: `Cannot find Info with id=${id}.`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving Info with id=" + id
            });
          });
      };


    // Delete One row info:
    exports.delete = (req, res) => {
        const id = req.params.id;
      
        Info.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Tutorial was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Tutorial with id=" + id
            });
          });
      };


      // Update info row: 
      exports.update = (req, res) => {
        const id = req.params.id;
      
        Info.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Info was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Info with id=${id}. Maybe Tutorial was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Info with id=" + id
            });
          });
      };

      // delete all:
      exports.deleteAll = (req, res) => {
        Info.destroy({
          where: {},
          truncate: false
        })
          .then(nums => {
            res.send({ message: `${nums} Infs were deleted successfully!` });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error Infos while removing all tutorials."
            });
          });
      };

      
      