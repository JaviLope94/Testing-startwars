
const assert = require('chai').assert
const expect = require('chai').expect
const should = require('chai').should()

describe('hooks', function () {

    before(function () {
        // runs once before the first test in this block
    });

    after(function () {
        // runs once after the last test in this block
    });

    beforeEach(function () {
        // runs before each test in this block
    });

    afterEach(function () {
        // runs after each test in this block
    });

    // test cases
});

describe('asyn await', function () {

    beforeEach(async function () {
        await assert.ok(true);
    });

    it('promise', function (done) {
        return new Promise(function (resolve) {
            assert.ok(true);
            resolve();
            done();
        });
    });
});

// Api completa de asserts: https://www.chaijs.com/api/assert/

describe('Chai - asserts', function () {
    it('assets sintaxis', function () {
        var typeString = 'example';
        var beverages = { tea: ['chai', 'matcha', 'oolong'] };

        assert.equal([1, 2, 3].indexOf(4), -1);
        assert.typeOf(typeString, 'string'); // without optional message
        assert.typeOf(typeString, 'string', 'typeString is a string'); // with optional message
        assert.equal(typeString, 'example', 'typeString equal `example`');
        assert.lengthOf(typeString, 7, 'typeString`s value has a length of 7');
        assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
    });
});

// Api completa de asserts: https://www.chaijs.com/api/bdd/

describe('chai - expect - BDD', function () {

    it('expect sintaxis', function () {
        var typeString = 'example';
        var beverages = { tea: ['chai', 'matcha', 'oolong'] };

        expect(typeString, 'typeString is a string').to.be.a('string');
        expect(typeString).to.equal('example');
        expect(typeString).to.have.lengthOf(7);
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    });
});

// Api completa de asserts: https://www.chaijs.com/api/bdd/

describe('chai - should - BDD', function () {

    it('should sintaxis', function () {
        var typeString = 'example';
        var beverages = { tea: ['chai', 'matcha', 'oolong'] };

        typeString.should.be.a('string');
        typeString.should.equal('example');
        typeString.should.have.lengthOf(7);
        beverages.should.have.property('tea').with.lengthOf(3);
    });
});


// context()es solo un alias para describe(), y se comporta de la misma manera; Proporciona una manera de mantener las 
// pruebas más fáciles de leer y organizar. Del mismo modo, specify()es un alias para it().

describe('Context & Specify', function () {
    context('when use expect', function () {
        specify('expect sintaxis', function () {
            var typeString = 'example';
            var beverages = { tea: ['chai', 'matcha', 'oolong'] };

            expect(typeString, 'typeString is a string').to.be.a('string');
            expect(typeString).to.equal('example');
            expect(typeString).to.have.lengthOf(7);
            expect(beverages).to.have.property('tea').with.lengthOf(3);
        });
    });
    context('when present', function () {
        specify('when use should', function () {
            var typeString = 'example';
            var beverages = { tea: ['chai', 'matcha', 'oolong'] };

            typeString.should.be.a('string');
            typeString.should.equal('example');
            typeString.should.have.lengthOf(7);
            beverages.should.have.property('tea').with.lengthOf(3);
        });
    });
});


// Ejemplo chai http no funcional

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// describe('chai http', function () {

//     const app ='https://swapi.co/api/starships/';
//     const fs = '';

//     it('aaddddaaa', function () {
//         chai.request(app)
//             .put('/user/me')
//             .set('X-API-Key', 'foobar')
//             .send({ password: '123', confirmPassword: '123' })
//         // Send some Form Data
//         chai.request(app)
//             .post('/user/me')
//             .type('form')
//             .send({
//                 '_method': 'put',
//                 'password': '123',
//                 'confirmPassword': '123'
//             })
//         // Attach a file
//         chai.request(app)
//             .post('/user/avatar')
//             .attach('imageField', fs.readFileSync('avatar.png'), 'avatar.png')
//         // Authenticate with Basic authentication
//         chai.request(app)
//             .get('/protected')
//             .auth('user', 'pass')
//         // Chain some GET query parameters
//         chai.request(app)
//             .get('/search')
//             .query({ name: 'foo', limit: 10 }) // /search?name=foo&limit=10
//     });

//     chai.request(app)
//         .put('/user/me')
//         .send({ password: '123', confirmPassword: '123' })
//         .then(function (res) {
//             expect(res).to.have.status(200);
//         })
//         .catch(function (err) {
//             throw err;
//         });
// });