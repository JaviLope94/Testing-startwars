
const assert = require('assert');
const should = chai.should();
const expect = chai.expect;

const app = require('../server');
const chai = require('chai');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

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

// Example BDD

// El BDD interfaz proporciona describe(), context(), it(), specify(), before(), after(), beforeEach(), y afterEach().

// context()es solo un alias para describe(), y se comporta de la misma manera; Proporciona una manera de mantener las 
// pruebas más fáciles de leer y organizar. Del mismo modo, specify()es un alias para it().

// describe('#indexOf()', function () {
//     context('when not present', function () {
//         it('should not throw an error', function () {
//             (function () {
//                 [1, 2, 3].indexOf(4);
//             }.should.not.throw());
//         });
//         it('should return -1', function () {
//             [1, 2, 3].indexOf(4).should.equal(-1);
//         });
//     });
//     context('when present', function () {
//         it('should return the index where the element first appears in the array', function () {
//             [1, 2, 3].indexOf(3).should.equal(2);
//         });
//     });
// });

// El TDD interfaz proporciona suite(), test(), suiteSetup(), suiteTeardown(), setup(), y teardown():

// suite('Array', function () {
//   setup(function () {
//     // ...
//   });

//   suite('#indexOf()', function () {
//     test('should return -1 when not present', function () {
//       assert.equal(-1, [1, 2, 3].indexOf(4));
//     });
//   });
// });

describe('chai asserts assert - TDD', function () {

    it('ccccc', function () {
        var assert = require('chai').assert
            , foo = 'bar'
            , beverages = { tea: ['chai', 'matcha', 'oolong'] };

        assert.typeOf(foo, 'string'); // without optional message
        assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
        assert.equal(foo, 'bar', 'foo equal `bar`');
        assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
        assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
    });
});

describe('chai asserts expect - BDD', function () {

    it('ccccc', function () {
        var expect = require('chai').expect
            , foo = 'bar'
            , beverages = { tea: ['chai', 'matcha', 'oolong'] };

        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.lengthOf(3);
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    });
});

describe('chai asserts should - BDD', function () {

    it('aaaaa', function () {
        var should = require('chai').should() //actually call the function
            , foo = 'bar'
            , beverages = { tea: ['chai', 'matcha', 'oolong'] };

        foo.should.be.a('string');
        foo.should.equal('bar');
        foo.should.have.lengthOf(3);
        beverages.should.have.property('tea').with.lengthOf(3);
    });
});

describe('chai http', function () {

    // const app = require('../../server');

    // it('aaddddaaa', function () {
    //     chai.request(app)
    //         .put('/user/me')
    //         .set('X-API-Key', 'foobar')
    //         .send({ password: '123', confirmPassword: '123' })
    //     // Send some Form Data
    //     chai.request(app)
    //         .post('/user/me')
    //         .type('form')
    //         .send({
    //             '_method': 'put',
    //             'password': '123',
    //             'confirmPassword': '123'
    //         })
    //     // Attach a file
    //     chai.request(app)
    //         .post('/user/avatar')
    //         .attach('imageField', fs.readFileSync('avatar.png'), 'avatar.png')
    //     // Authenticate with Basic authentication
    //     chai.request(app)
    //         .get('/protected')
    //         .auth('user', 'pass')
    //     // Chain some GET query parameters
    //     chai.request(app)
    //         .get('/search')
    //         .query({ name: 'foo', limit: 10 }) // /search?name=foo&limit=10
    // });

    // chai.request(app)
    //     .put('/user/me')
    //     .send({ password: '123', confirmPassword: '123' })
    //     .then(function (res) {
    //         expect(res).to.have.status(200);
    //     })
    //     .catch(function (err) {
    //         throw err;
    //     });
});