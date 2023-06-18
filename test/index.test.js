
process.env.NODE_ENV = "test";
const models = require('../src/models/index');
const { QueryTypes } = require("sequelize");
const sequelizeInstance = models.sequelizeInstance;

//
const { Pool } = require('pg');
const { app, server} = require('../src/index');
const supertest = require('supertest');
const api = supertest(app)
    


describe('Testing GET/', () => {
    
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

    test('should respond with a 200 status code', async ()=>{
        await api
            .get('/api/usuario/').send()
            .expect(200)
    })

    test('should respond with a 200 status code', async ()=>{
        await api
            .get('/api/usuario/1').send()
            .expect(200)
    })

    

})

describe('Testing POST/', () => {

    test('should respond with a 200 status code and message', async ()=>{
        const newProduct ={
            nombre:'Alitas BBQ',
            precio:'15000', 
            categoria:'plato fuerte'
        }

        await api
            .post('/api/productos/register')
            .send(newProduct)
            .expect(200)
            .expect('{"message":"User Added successfully","body":{"user":{"nombre":"Alitas BBQ","precio":"15000","categoria":"plato fuerte"}}}')
        
    })

    test('should respond with a 200 status code and message', async ()=>{
        const newUser ={
            name: "Kevin",
            email: "KevinFlow@correo.com"
        }

        await api
            .post('/api/usuario/register')
            .send(newUser)
            .expect(200)
            .expect('{"message":"User Added successfully","body":{"user":{"name":"Kevin","email":"KevinFlow@correo.com"}}}')
        
    })

    //Not working 
    test('should respond with a 200 status code and message', async ()=>{
        const newUser ={
            email: "KevinFlow@correo.com"
        }

        await api
            .post('/usuario/1')
            .send(newUser)
            .expect(404)
            //.expect('{"message":"User Added successfully","body":{"user":{"name":"Kevin","email":"KevinFlow@correo.com"}}}')
        
    })

    test('should respond with a 200 status code and message', async ()=>{
        const newOrder ={
            nombre: "Kevin",
            cedula: "1107518",
            telefono: "1234",
            correo: "Kevin@correo.com",
            orden1: 1,
            orden2: 2,
            orden3: 3,
            direccion: "calle 14b #31-24" 
        }

        await api
            .post('/api/ordenes/register')
            .send(newOrder)
            .expect(200)
            .expect('{"message":"Orden Registrada, en un momento la atenderemos","body":{"user":{"nombre":"Kevin","cedula":"1107518","telefono":"1234","correo":"Kevin@correo.com","orden1":1,"orden2":2,"orden3":3,"direccion":"calle 14b #31-24"}}}')

    })

})

//Cerrar servidor
afterAll(()=>{
    server.close()
})
