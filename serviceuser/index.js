const express = require('express')
const app = express()
const axios = require('axios')
var cors = require('cors')

app.use(cors())

const users = [
    {
        id: 'HKT001',
        name: "alice",
    },
    {
        id: 'HKT002',
        name: "bob",
    }
]

app.get('/', (req, res) => {
    res.send(users)
})

app.get('/userGetProduct', async (req, res) => {
    try {
        let products = await axios({
            method: 'get',
            url: 'http://localhost:7799/products',
        })
        console.log(products.data);
        let productsJSON = JSON.stringify(products.data)
        res.send(productsJSON)
    } catch (error) {
        console.log(error.message);
        throw error
    }
})

app.get('/getSumPrice', async (req, res) => {
    try {
        let products = await axios({
            method: 'get',
            url: 'http://localhost:7799/products',
        })
        console.log(products.data);
        // let productsJSON = JSON.stringify(products.data)
        let sum = 0
        products.data.forEach(element => {
            sum += element.price
        });
        console.log('sum =', sum);
        res.json({
            sum: sum
        })
    } catch (error) {
        console.log('this error:',error.message);
        res.send(`cant call service products ${error.message}`)
    }
})



app.listen(7788, () => {
    console.log('server 77788 running');
})