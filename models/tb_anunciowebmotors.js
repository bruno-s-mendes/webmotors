'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_AnuncioWebmotors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_AnuncioWebmotors.init({
    ID: DataTypes.NUMBER,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    versao: DataTypes.STRING,
    ano: DataTypes.NUMBER,
    quilometragem: DataTypes.NUMBER,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_AnuncioWebmotors',
  });
  return tb_AnuncioWebmotors;
};