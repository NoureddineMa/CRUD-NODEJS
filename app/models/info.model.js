module.exports = (sequelize, Sequelize) => {
    const Info = sequelize.define("info", 
    {
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        age: {
            type: Sequelize.INTEGER
        }
    })
    return Info;
}


