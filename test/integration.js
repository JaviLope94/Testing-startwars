const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server');
const expect = chai.expect;
const should = chai.should();

// starwars mocks
const starwarsFilmListMock = require('../mocks/starwars/film_list.json');

// Como la end función recibe una devolución de llamada, las aserciones se ejecutan de forma asincrónica.
// Por lo tanto, se debe utilizar un mecanismo para notificar a la prueba que la devolución de la llamada
// se ha completado. De lo contrario, la prueba terminará antes de que se verifiquen las afirmaciones.

// Por ejemplo, en el marco de prueba de Mocha , esto se logra utilizando la función done() ,
// que indica que la devolución de llamada se ha completado, y las afirmaciones se pueden verificar:

describe('GET /films-list', () => {
  it('should return a list of films when called', done => {
    chai
      .request(app)
      .get('/films-list')
      .end((err, res) => {

        console.log(res);

        expect(res).not.to.have.cookie('sessionid');

        res.should.have.status(200);
        expect(res.status).to.equal(200);

        expect(err).to.be.null;

        expect(res.body).to.deep.equal(starwarsFilmListMock);

        expect(res.body[0].title).to.deep.equal('A New Hope');

        expect(res).to.be.json;

        expect(res).to.have.header('content-type', 'application/json; charset=utf-8');

        expect(res).to.be.json;

        expect(res).not.to.be.text;
        done();
      });
  });
});
