const { Player, Salary } = require("../db/models");

class StorageService {
  getPlayers = () => Player.findAll();

  getPlayer = async (player_id) => {
    //TODO 1: Use Player sequelize model to retrieve the specific player
    return await Player.findOne({ where: { player_id: player_id } });
  };

  createPlayer = async (player) => {
    //TODO 2: Use Player sequelize model to create a player
    return await Player.create(player);
  };

  createSalary = async (salary) => {
    //TODO 4: Use Salary sequelize model to create a salary
    return await Salary.create(salary);
  };

  getSalary = async (salary_id) => {
    //TODO 5: Use Salary sequelize model to get salary
    // return await Salary.findOne({ where: { id: salary_id } })

    return await Salary.findByPk(salary_id, {
      include: Player,
    });
  };
}

module.exports = new StorageService();
