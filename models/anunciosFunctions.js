const { tb_AnuncioWebmotors } = require('./');

const getAds = async () => {
  const ads = await tb_AnuncioWebmotors.findAll();
  
  return ads;
};

const insertAd = async (adContent) => {
  const { marca, modelo, versao, ano, quilometragem, observacao } = adContent;

  await tb_AnuncioWebmotors.create({ marca, modelo, versao, ano, quilometragem, observacao });

  return { marca, modelo, versao, ano, quilometragem, observacao };
};

const updateById = async (receivedId, adContent) => {
  const { marca, modelo, versao, ano, quilometragem, observacao } = adContent;
  
  await tb_AnuncioWebmotors.update(
    { marca, modelo, versao, ano, quilometragem, observacao },
    { where: { ID: receivedId } },
  );

  return { marca, modelo, versao, ano, quilometragem, observacao };
};

const deleteById = async (receivedId) => {
  const deletedAd = await tb_AnuncioWebmotors.destroy(
    { where: { ID: receivedId } },
  );

  return deletedAd;
};


module.exports = {
  getAds,
  insertAd,
  updateById,
  deleteById,
};