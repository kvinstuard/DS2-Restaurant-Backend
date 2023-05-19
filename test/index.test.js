
const { app, server} = require('../src/index');
const supertest = require('supertest');
const api = supertest(app)
    

describe('Test the status paths', () => {

    test('should respond with a 200 status code', async ()=>{
        await api
            .get('/api/productos').send()
            .expect(200)
    })

    test('should respond with a 200 status code', async ()=>{
        await api
            .get('/api/ordenes').send()
            .expect(200)
    })
/*
    test('should respond with a 200 status code', async ()=>{
        await api
            .post('/api/productos/register')
            .send({ nombre:'Alitas BBQ', precio:'15000', categoria:'plato fuerte'})
            .set('Accept', 'application/json')
            .expect('User Added successfully')
    })
*/
    //Cerrar servidor
    afterAll(()=>{
        server.close()
        //Cerrar conexion con la BD
    })

})
