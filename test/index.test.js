
const { app, server, client } = require('../src/index');
const supertest = require('supertest');
const api = supertest(app)

    
    test('should respond with a 200 status code', async ()=>{
        await api
            .get('/api/ordenes').send()
            .expect(200)
    })

    test('should respond with a 200 status code', async ()=>{
        await api
            .get('/api/productos').send()
            .expect(200)
    })

    test('should respond with a 200 status code', async ()=>{
        await api
            .get('/api/usuario/register').send()
            .expect(404)
    })
    test('should respond with a 200 status code', async ()=>{
        await api
            .get('/api/productos/register').send()
            .expect(404)
    })
    
    //Cerrar servidor
    afterAll(()=>{

        server.close()
    })
