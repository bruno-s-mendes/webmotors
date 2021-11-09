const anunciosFunctions =  require('./models/anunciosFunctions');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_BAD_STATUS = 400;

const create = async (req, res) => {
  const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;

  try {
    const response = await anunciosFunctions.insertAd({ marca, modelo, versao, ano, quilometragem, observacao });
    return res.status(HTTP_CREATED_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_BAD_STATUS).json({
      message: error,
  });
  }
};

const getAll = async (_req, res) => {
  try {
    const response = await anunciosFunctions.getAds();

    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_BAD_STATUS).json({
      message: error,
  });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await anunciosFunctions.updateById(id);

    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_BAD_STATUS).json({
      message: error,
  });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await anunciosFunctions.deleteById(id);

    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_BAD_STATUS).json({
      message: error,
  });
  }
};

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
}; 