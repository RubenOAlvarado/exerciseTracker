const supertest = require('supertest');
const app = require('../server');
const request = supertest(app);

describe('Saving a user', () => {
    it('Should record a user in the database', async done => {
        const res = await request.post('/users/add')
                                .send({username:'rub'});
        
        const output = {message: 'User added'};

        expect(output);
        expect(res.statusCode).toEqual(200);

    });
});

describe('Getting all users in the DB', () =>{
    it('should return a object with the users', async done => {
        const res = await request.get('/users/');

        const output = {username:'beau'};
        expect(res.status).toEqual(200);
        expect(output);
        done();
    });
});

