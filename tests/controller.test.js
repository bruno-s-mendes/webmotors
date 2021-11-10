const sinon = require('sinon');
const { expect } = require('chai');

const controller = require('../controller');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_BAD_STATUS = 400;

describe('Testar Create ', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })

    it('é chamado o status com o código 400', async () => {
      await controller.create(request, response);

      expect(response.status.calledWith(HTTP_BAD_STATUS)).to.be.equal(true);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        "marca": 'Ford',
        "modelo": 'fusion',
        "versao": '2.0',
        "ano": 2020,
        "quilometragem": 0,
        "observacao": 'ZeroKm',
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })

    it('é chamado o status com o código 201', async () => {
      await controller.create(request, response);

      expect(response.status.calledWith(HTTP_CREATED_STATUS)).to.be.equal(true);
    });
  });
});

describe('Testar getAll ', () => {
  const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })
    it('é chamado o status com o código 200', async () => {
      await controller.getAll(request, response);

      expect(response.status.calledWith(HTTP_OK_STATUS)).to.be.equal(true);
    });
});

describe('Testar updateById ', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params= {
        id: 1
      }
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })

    it('é chamado o status com o código 400', async () => {
      await controller.updateById(request, response);

      expect(response.status.calledWith(HTTP_BAD_STATUS)).to.be.equal(true);
    });
  });

  describe('quando é feito update com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params= {
        id: 1
      }

      request.body = {
        "marca": 'Ford',
        "modelo": 'fusion',
        "versao": '2.0',
        "ano": 2020,
        "quilometragem": 0,
        "observacao": 'ZeroKm',
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })

    it('é chamado o status com o código 200', async () => {
      await controller.updateById(request, response);

      expect(response.status.calledWith(HTTP_OK_STATUS)).to.be.equal(true);
    });
  });
});

describe('Testar deleteById ', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params= {
        id: 'xsp'
      }
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })

    it('é chamado o status com o código 400', async () => {
      await controller.deleteById(request, response);

      expect(response.status.calledWith(HTTP_BAD_STATUS)).to.be.equal(true);
    });
  });

  describe('quando é Deletado com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params= {
        id: 6
      }

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })

    it('é chamado o status com o código 200', async () => {
      await controller.deleteById(request, response);

      expect(response.status.calledWith(HTTP_OK_STATUS)).to.be.equal(true);
    });
  });
});