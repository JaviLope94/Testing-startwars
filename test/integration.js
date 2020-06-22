const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server');
const expect = chai.expect;
const should = chai.should();

// starwars mocks
const starwarsFilmListMock = require('../mocks/starwars/film_list.json');
const starwarsANewHopeFilmMock = require('../mocks/starwars/a_new_hope_film.json');
const starwarsLukeSkywalkerPeopleMock = require('../mocks/starwars/luke_skywalker.json');
const starwarsTattoinePlanetMock = require('../mocks/starwars/tattoine.json');
const starwarsStarshipMock = require('../mocks/starwars/cr90_corvette.json');
const starwarsVehicleMock = require('../mocks/starwars/sand_crawler.json');
const starwarsSpeciesMock = require('../mocks/starwars/human.json');

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

describe('GET /film/:episode', () => {
  it('should return film information for A New Hope Episode 4 when called', done => {
    const episode = '4';
    chai
      .request(app)
      .get('/film/' + episode)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(starwarsANewHopeFilmMock);
        done();
      });
  });
});

describe('GET /people/:id', () => {
  it('should return people information for Luke Skywalker when called', done => {
    const peopleId = '1';
    chai
      .request(app)
      .get('/people/' + peopleId)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(starwarsLukeSkywalkerPeopleMock);
        expect(res).to.have.header('vary', 'Origin');
        done();
      });
  });
});

describe('GET /planet/:id', () => {
  it('should return planet information for Tattoine when called', done => {
    const planetId = '1';
    chai
      .request(app)
      .get('/planet/' + planetId)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.status).equal(200);
        expect(res.body).to.deep.equal(starwarsTattoinePlanetMock);
        done();
      });
  });
});

describe('GET /starship/:id', () => {
  it('should return starship information when called', done => {
    const starshipId = '2';
    chai
      .request(app)
      .get('/starship/' + starshipId)
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.status);
        expect(res.body).to.deep.equal(starwarsStarshipMock);
        done();
      });
  });
});

describe('GET /vehicle/:id', () => {
  it('should return vehicle information when called', done => {
    const vehicleId = '4';
    chai
      .request(app)
      .get('/vehicle/' + vehicleId)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(starwarsVehicleMock);
        done();
      });
  });
});

describe('GET /species/:id', () => {
  it('should return species information when called', done => {
    const speciesId = '1';
    chai
      .request(app)
      .get('/species/' + speciesId)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(starwarsSpeciesMock);
        done();
      });
  });
});
